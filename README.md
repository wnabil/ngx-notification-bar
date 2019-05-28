# Description

Angular notification bar component for Angular 2+ projects.

This is a modified version from [angular2-notification-bar](https://github.com/Hydrane/angular2-notification-bar) project to work with all Angular 2+ versions.

The reason is why i created this project is the old project is not working with Angular 4.1.x+ and there is alot of modifications on this project to work with webpack 2.

# Installation

```bash
npm install ngx-notification-bar --save
```

# Usage

```javascript
import { NotificationBarModule } from 'ngx-notification-bar'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
      BrowserAnimationsModule, // optional for animations
      BrowserModule,
      NotificationBarModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

```html
<notification-bar></notification-bar>
```

```javascript
import { NotificationBarService } from 'ngx-notification-bar';

constructor(private notificationBarService:NotificationBarService){}

this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success});
```

# Options

    message: string;
    type?: NotificationType;
    autoHide?: boolean;
    hideDelay?: number;
    isHtml?: boolean;
    allowClose?: boolean;
    hideOnHover?: boolean

# License
MIT
