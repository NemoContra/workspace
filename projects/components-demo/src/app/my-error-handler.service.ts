import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    console.log('Catching eror', error);
    throw error;
  }
}
