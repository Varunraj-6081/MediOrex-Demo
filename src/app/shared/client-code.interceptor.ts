import { HttpInterceptorFn } from '@angular/common/http';
import { CLIENT_CODE } from './api.config';

export const clientCodeInterceptor: HttpInterceptorFn = (request, next) => {
  const requestWithClientCode = request.clone({
    setHeaders: {
      'X-Client-Code': CLIENT_CODE,
    },
  });

  return next(requestWithClientCode);
};
