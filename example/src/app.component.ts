import { Component, OnInit } from '@angular/core';
import { NotificationBarService, NotificationType } from '../../';

@Component({
    selector: 'app',
    templateUrl: './app.html',
})
export class AppComponent implements OnInit {
    enable: boolean = true;
    count: number = 0;

    constructor(
        public notificationBarService: NotificationBarService
    ) {
    }

    ngOnInit() {

    }

    createInfo() {
        this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Info});
    }

    createSuccess() {
        this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success});
    }

    createError() {
        this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Error});
    }

    createWarning() {
        this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Warning});
    }
}