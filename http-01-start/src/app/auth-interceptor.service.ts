import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on the way');
        // To modify request, make new req and modify
        const modifiedReq = req.clone(
            {
                headers: req.headers.append('Auth', 'abcxyz')
            }
        );
        console.log('Auth key set');
        return next.handle(modifiedReq).pipe(tap(event => {
            // console.log(event);
            if (event.type === HttpEventType.Response) {
                // console.log('Response arrived: ' + event.body);
            }
        }));
    }
}