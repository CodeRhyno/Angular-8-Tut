import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Log req: ');
        console.log(req.url);
        return next.handle(req).pipe(tap(event => {
            console.log('Incomming response: ');
            console.log(event.type);
        }));
    }
}