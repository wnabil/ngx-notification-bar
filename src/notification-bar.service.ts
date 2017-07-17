import { Injectable, EventEmitter } from '@angular/core';

import { Notification } from '../index';

/**
 * A service to create notification, It can be used from any component or guard
 */
@Injectable()
export class NotificationBarService {


    onCreate = new EventEmitter<Notification>();

    constructor() {
    }

    create(notification: Notification) {
        this.onCreate.emit(notification);
    }
}
