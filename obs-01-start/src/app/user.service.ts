import { Injectable, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>();
    activateEmitter = new Subject<boolean>();
}