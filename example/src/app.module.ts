import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotificationBarModule } from '../../'
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserAnimationsModule,BrowserModule, FormsModule, NotificationBarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent ]
})
export class AppModule {

}