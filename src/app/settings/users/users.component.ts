import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../shared/auth/auth.service";
import { UsersService } from "./users.service";

interface UserRow {
  userId: number;
  firstName: string;
  lastName: string;
  name: string;
  username: string;
  phone: string;
  initials: string;
  designation: string;
  role: string;
  email: string;
  status: string;
  lastLogin: string;
  color: string;
}

@Component({
  selector: "app-settings-users",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class SettingsUsersComponent {
  @Output() tabChange = new EventEmitter<string>();

  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {
    this.loadUsers();
    this.loadRoles();
  }

  activeTab = "users";

  searchText = "";
  selectedRole = "";
  selectedStatus = "";

  showPassword = false;
  showConfirmPassword = false;
  editingUserId: number | null = null;

  users: UserRow[] = [];
  roles: string[] = [];
  loading = true;
  loadError = "";
  rolesError = "";
  successMessage = "";
  errorMessage = "";
  showSuccessDialog = false;
  successDialogMessage = "";
  showDeleteDialog = false;
  userPendingDelete: UserRow | null = null;

  get isSuperAdmin(): boolean {
    const currentUser = this.authService.user();
    const role = currentUser?.role_name || "";
    const username = currentUser?.username || "";

    return (
      this.normalizeRole(role) === "superadmin" ||
      username.trim().toLowerCase() === "superadmin"
    );
  }

  newUser = {
    firstName: "",
    lastName: "",
    role: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    active: true,
  };

  private loadRoles(): void {
    this.usersService.getRoles().subscribe({
      next: (response) => {
        this.roles = response.roles.map((role) => role.roleName);
      },
      error: () => {
        this.rolesError = "Unable to load roles.";
      },
    });
  }

  private loadUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response.users.map((user, index) => {
          const name = [user.firstName, user.lastName]
            .filter(Boolean)
            .join(" ");
          const role = user.roles[0] || "Staff";
          const normalizedStatus = user.status.toLowerCase();

          return {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName || "",
            name: name || user.username,
            username: user.username,
            phone: user.mobileNumber || "",
            initials: this.initials(name || user.username),
            designation: role,
            role: this.displayRole(role),
            email: user.email || "-",
            status: normalizedStatus === "active" ? "Active" : "Inactive",
            lastLogin: this.formatLastLogin(user.lastLoginAt),
            color: ["#3b82f6", "#2496ed", "#6366f1", "#10b981", "#ef476f"][
              index % 5
            ],
          };
        });
        this.loading = false;
      },
      error: () => {
        this.loadError = "Unable to load users. Please try again.";
        this.loading = false;
      },
    });
  }

  private initials(name: string): string {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");
  }

  private displayRole(role: string): string {
    return role
      .toLowerCase()
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  private normalizeRole(role: string): string {
    return role.toLowerCase().replace(/[^a-z]/g, "");
  }

  isProtectedUser(user: UserRow): boolean {
    return (
      user.username.toLowerCase() === "superadmin" ||
      this.normalizeRole(user.role) === "superadmin"
    );
  }

  private formatLastLogin(value: string | null): string {
    if (!value) {
      return "Never";
    }

    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  }

  get filteredUsers() {
    return this.users.filter((user) => {
      const search = this.searchText.toLowerCase();

      const matchesSearch =
        !search ||
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search);

      const matchesRole = !this.selectedRole || user.role === this.selectedRole;

      const matchesStatus =
        !this.selectedStatus || user.status === this.selectedStatus;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  get passwordsDoNotMatch(): boolean {
    return (
      (!!this.newUser.password || !!this.newUser.confirmPassword) &&
      this.newUser.password !== this.newUser.confirmPassword
    );
  }

  selectTab(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }

  openCreateUser() {
    document.querySelector(".create-user-card")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  createUser() {
    this.successMessage = "";
    this.errorMessage = "";

    if (
      !this.newUser.firstName.trim() ||
      !this.newUser.lastName.trim() ||
      !this.newUser.role ||
      !this.newUser.phone.trim() ||
      !this.newUser.username ||
      !this.newUser.password
    ) {
      if (!this.newUser.password) {
        this.errorMessage = "Password is required.";
      }
      return;
    }

    const username = this.newUser.username.trim().toLowerCase();
    const userAlreadyExists = this.users.some(
      (user) =>
        user.userId !== this.editingUserId &&
        user.username.trim().toLowerCase() === username,
    );

    if (userAlreadyExists) {
      this.errorMessage = "User already exists";
      return;
    }

    if (this.newUser.password !== this.newUser.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }

    const payload = {
      firstName: this.newUser.firstName.trim(),
      lastName: this.newUser.lastName.trim(),
      phone: this.newUser.phone.trim(),
      email: this.newUser.email.trim() || null,
      role: this.newUser.role,
      username: this.newUser.username.trim(),
      password: this.newUser.password,
      active: this.newUser.active,
    };
    const request = this.editingUserId
      ? this.usersService.updateUser({ ...payload, userId: this.editingUserId })
      : this.usersService.createUser(payload);

    request.subscribe({
      next: () => {
        this.successDialogMessage = this.editingUserId
          ? "User updated successfully"
          : "User created successfully";
        this.showSuccessDialog = true;
        this.resetForm();
        this.loadUsers();
      },
      error: (error) => {
        this.errorMessage =
          error.status === 409
            ? "User already exists"
            : error.error?.message || "Unable to save user details";
      },
    });
  }

  closeSuccessDialog(): void {
    this.showSuccessDialog = false;
  }

  editUser(user: UserRow) {
    this.editingUserId = user.userId;
    this.newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.designation,
      phone: user.phone,
      email: user.email === "-" ? "" : user.email,
      username: user.username,
      password: "",
      confirmPassword: "",
      active: user.status === "Active",
    };

    this.openCreateUser();
  }

  deleteUser(user: UserRow) {
    this.userPendingDelete = user;
    this.showDeleteDialog = true;
  }

  cancelDelete(): void {
    this.showDeleteDialog = false;
    this.userPendingDelete = null;
  }

  confirmDelete(): void {
    const user = this.userPendingDelete;

    if (!user) {
      return;
    }

    this.showDeleteDialog = false;
    this.userPendingDelete = null;

    this.usersService.deleteUser(user.userId).subscribe({
      next: () => {
        this.successDialogMessage = "User deleted successfully";
        this.showSuccessDialog = true;
        this.loadUsers();
      },
      error: (error) => {
        this.errorMessage =
          error.error?.message || "Unable to delete user details";
      },
    });
  }

  resetFilters() {
    this.searchText = "";
    this.selectedRole = "";
    this.selectedStatus = "";
  }

  resetForm() {
    this.editingUserId = null;
    this.newUser = {
      firstName: "",
      lastName: "",
      role: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      active: true,
    };

    this.showPassword = false;
    this.showConfirmPassword = false;
  }
}
