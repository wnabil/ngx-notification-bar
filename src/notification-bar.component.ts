import { trigger, state, style, transition, animate } from '@angular/animations'
import {
    Component, OnInit, Optional, Inject,
    InjectionToken, OnDestroy
} from '@angular/core';

import { NotificationBarService } from './notification-bar.service';
import { Notification, NotificationType } from '../index';
import { MessagesConfig } from './message-config';
import { Subscription } from 'rxjs/Subscription';



export const MESSAGES_CONFIG = new InjectionToken('notification-bar.messages.config');

@Component({
    selector: 'notification-bar',
    styles: [`
        :host {
          position: relative;
          display: block;
        }
        
        .notifications-container {
          position: fixed;
          top: 0px;
          right: 0;
          left: 0;
          line-height: 25px;
          width: 100%;
          z-index: 6;
          overflow: hidden;
        }
        
        .notification {
          position: relative;
          text-align: center;
          font-size: 12px;
          color: #fff;
        }
        
        .message {
          padding: 0 12px;
        }
        
        .error {
          background-color: #F64747;
          border-bottom: 1px solid #f31515;
        }
        
        .success {
          background-color: #03C9A9;
          border-bottom: 1px solid #02aa8f;
        }
        
        .warning {
          background-color: #F7CA18;
          border-bottom: 1px solid #e7ba08;
        }
        
        .info {
          background-color: #0c6997;
          border-bottom: 1px solid #0c6997;
        }
        
        .close-click {
          font-size: 22px;
          cursor: pointer;
          padding: 10px;
          position: relative;
          top: 2px;
          margin: 0 auto;
        }
    `],
    template: `
        <div class="notifications-container">
            <div *ngFor="let notification of notifications; let i = index;"
                 class="notification {{notification.typeValue}}"
                 (mouseover)="hideOnHover(notification)"
                 [@flyDown]>
                <span *ngIf="notification.isHtml" class="message" [innerHTML]="notification.message"></span>
                <span *ngIf="!notification.isHtml" class="message">{{notification.message}}</span>
                <span class="close-click" *ngIf="notification.allowClose" (click)="hideNotification(notification)">×</span>
            </div>
        </div>
    `,
    animations: [
        trigger('flyDown', [
            state('in', style({
                opacity: 1,
                transform: 'translateY(0)'
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }),
                animate('600ms ease-in')
            ]),
            transition('* => void', [
                animate('200ms ease-out', style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }))
            ])
        ])
    ]
})
export class NotificationBarComponent implements OnInit, OnDestroy {

    notifications: Notification[] = [];

    defaults = {
        message: '',
        type: NotificationType.Info,
        autoHide: true,
        hideDelay: 3000,
        isHtml: false,
        allowClose: false,
        hideOnHover: true
    };

    subscription: Subscription;

    constructor(
        private notificationBarService: NotificationBarService,
        @Inject(MESSAGES_CONFIG) @Optional() private config?: MessagesConfig
    ) {
        this.subscription = this.notificationBarService.onCreate.subscribe(this.addNotification.bind(this));
    }

    ngOnInit() { }

    addNotification(notification: Notification) {
        let newNotification = Object.assign({}, this.defaults, notification);
        newNotification.typeValue = NotificationType[newNotification.type].toLowerCase();
        if (this.config && this.config.messages) {
            newNotification.message = this.config.messages[notification.message] || notification.message;
        }

        this.notifications.push(newNotification);

        if (newNotification.autoHide) {
            window.setTimeout(() => {
                this.hideNotification(newNotification);
            }, newNotification.hideDelay);
        }
    }

    hideNotification(notification: Notification) {
        let index = this.notifications.indexOf(notification);

        this.notifications.splice(index, 1);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    hideOnHover(notification: Notification) {
        if (notification.hideOnHover) {
            this.hideNotification(notification);
        }
    }
}
