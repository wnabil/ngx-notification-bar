import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationBarService } from './notification-bar.service';
import { NotificationBarComponent, MESSAGES_CONFIG } from './notification-bar.component';
import { MessagesConfig } from './message-config';



@NgModule({
    imports:      [
        CommonModule
    ],
    declarations: [ NotificationBarComponent ],
    providers: [ NotificationBarService ],
    exports: [ NotificationBarComponent ]
})
export class NotificationBarModule {

    static forRoot(config: MessagesConfig): ModuleWithProviders {
        return {
            ngModule: NotificationBarModule,
            providers: [
                { provide: MESSAGES_CONFIG, useValue: config }
            ]
        };
    }
}
