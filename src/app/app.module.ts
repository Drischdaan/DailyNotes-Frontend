import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SidebarComponent } from './sidebar/sidebar.component';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RippleModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    TabMenuModule,
    SidebarModule,
    ToastModule,
    PanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
