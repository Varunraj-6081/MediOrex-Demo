import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export interface BillPdfData {
  billNo: string;
  date: string;
  time: string;
  patientName: string;
  uhid: string;
  age: number | string;
  gender: string;
  phone: string;
  department: string;
  doctor: string;
  tokenNo: string;
  consultationType: string;
  visitType: string;
  items: { name: string; description: string; amount: number }[];
  subtotal: number;
  discount: number;
  totalAmount: number;
  paymentMode: string;
  amountReceived: number;
}

@Injectable({ providedIn: 'root' })
export class BillPdfService {
  private money(value: number): string {
    return `Rs. ${Number(value || 0).toFixed(2)}`;
  }

  /** Snapshot of the on-screen A4 invoice into a paginated PDF. */
  async invoiceElementToPdf(element: HTMLElement): Promise<jsPDF> {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
    });
    const fullImage = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10;
    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= pageHeight - margin * 2) {
      pdf.addImage(fullImage, 'PNG', margin, margin, imgWidth, imgHeight);
    } else {
      const pagePx = Math.floor(
        (canvas.width * (pageHeight - margin * 2)) / imgWidth,
      );
      let rendered = 0;
      let firstPage = true;
      while (rendered < canvas.height) {
        const slice = document.createElement('canvas');
        slice.width = canvas.width;
        slice.height = Math.min(pagePx, canvas.height - rendered);
        const ctx = slice.getContext('2d');
        if (!ctx) {
          break;
        }
        ctx.drawImage(
          canvas,
          0,
          rendered,
          canvas.width,
          slice.height,
          0,
          0,
          canvas.width,
          slice.height,
        );
        if (!firstPage) {
          pdf.addPage();
        }
        pdf.addImage(
          slice.toDataURL('image/png'),
          'PNG',
          margin,
          margin,
          imgWidth,
          (slice.height * imgWidth) / canvas.width,
        );
        rendered += slice.height;
        firstPage = false;
      }
    }

    return pdf;
  }

  async downloadInvoiceElement(
    element: HTMLElement,
    filename: string,
  ): Promise<void> {
    const pdf = await this.invoiceElementToPdf(element);
    pdf.save(filename);
  }

  async printInvoiceElement(element: HTMLElement): Promise<void> {
    const pdf = await this.invoiceElementToPdf(element);
    this.printPdf(pdf);
  }

  /** Sends a PDF to the printer with only the bill content. */
  printPdf(pdf: jsPDF): void {
    const blobUrl = URL.createObjectURL(pdf.output('blob'));
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = blobUrl;
    iframe.onload = () => {
      setTimeout(() => {
        iframe.contentWindow?.print();
      }, 300);
    };
    document.body.appendChild(iframe);
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
      iframe.remove();
    }, 60000);
  }

  /** Text-based PDF built from bill data (no invoice DOM needed). */
  buildBillDataPdf(data: BillPdfData): jsPDF {
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
    const left = 15;
    let y = 18;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(20);
    pdf.text('MediOrex', left, y);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.text('MediOrex Multi-Specialty', left, y + 9);
    pdf.text('123, Health Avenue, Anna Nagar, Chennai - 600040', left, y + 15);
    pdf.text('Phone: +91 44 4567 8900', left, y + 21);

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.text('Consultation Bill', 105, y + 32, { align: 'center' });
    y += 42;

    pdf.setFontSize(10);
    const meta: [string, string][] = [
      ['Bill No.', data.billNo || '-'],
      ['Date', `${data.date || '-'} ${data.time || ''}`.trim()],
      ['UHID', data.uhid || '-'],
      ['Token No.', data.tokenNo || '-'],
      ['Patient', data.patientName || '-'],
      [`Age / Gender`, `${data.age ?? '-'} / ${data.gender || '-'}`],
      ['Phone', data.phone || '-'],
      ['Department', data.department || '-'],
      ['Doctor', data.doctor || '-'],
      ['Consultation', data.consultationType || '-'],
    ];
    pdf.setFont('helvetica', 'normal');
    for (const [label, value] of meta) {
      pdf.text(`${label}: ${value}`, left, y);
      y += 6;
    }
    y += 4;

    pdf.setFont('helvetica', 'bold');
    pdf.text('Services', left, y);
    y += 7;
    pdf.setFont('helvetica', 'normal');
    for (const item of data.items || []) {
      pdf.text(
        `${item.name || ''} - ${item.description || ''}`,
        left,
        y,
      );
      pdf.text(this.money(Number(item.amount) || 0), 195, y, {
        align: 'right',
      });
      y += 6;
    }
    y += 4;

    pdf.text(`Discount: ${this.money(data.discount)}`, left, y);
    y += 6;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text(`Total: ${this.money(data.totalAmount)}`, left, y);
    y += 8;
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text(`Payment: ${data.paymentMode || '-'}`, left, y);

    return pdf;
  }

  downloadBillData(data: BillPdfData): void {
    this.buildBillDataPdf(data).save(`${data.billNo || 'bill'}.pdf`);
  }

  printBillData(data: BillPdfData): void {
    this.printPdf(this.buildBillDataPdf(data));
  }
}
