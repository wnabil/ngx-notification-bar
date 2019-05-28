import { Component } from '@angular/core';
import { NotificationBarService, NotificationType } from 'ngx-notification-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enable = true;
  count = 0;

  constructor(
    public notificationBarService: NotificationBarService
  ) { }

  createInfo() {
    this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Info });
  }

  createSuccess() {
    this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success });
  }

  createError() {
    this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Error });
  }

  createWarning() {
    this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Warning });
  }
}

