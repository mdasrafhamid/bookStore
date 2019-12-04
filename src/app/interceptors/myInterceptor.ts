import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

export class MyInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('Request Intercepted....')

        return next.handle(req)
            .pipe(catchError(this.handleError))
    }

    handleError(error:HttpErrorResponse){

        if(error.status>=400 && error.status<500){
          return throwError(error.error.message)
        }else{
          alert('Something went wrong..')
          console.log('logging the error...',error)
        }
      }

}