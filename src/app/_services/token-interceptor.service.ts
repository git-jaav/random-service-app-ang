
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_NAME } from '../_shared/constantes';
import { tap } from 'rxjs/operators';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }
}
