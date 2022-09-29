import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
