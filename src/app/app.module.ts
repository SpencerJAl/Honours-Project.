import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { BorrowComponent } from './components/borrow/borrow.component';
import { ScanComponent } from './components/scan/scan.component';
import { ReturnComponent } from './components/return/return.component';
import { LoanedComponent } from './components/loaned/loaned.component';
import { LoginComponent } from './components/login/login.component';
import { CoverComponent } from './components/cover/cover.component';
import { ReturnSelectComponent } from './components/return-select/return-select.component';
import { LoanedModuleComponent } from './components/loaned-module/loaned-module.component';
import { ReturnModuleComponent } from './components/return-module/return-module.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    BorrowComponent,
    ScanComponent,
    ReturnComponent,
    LoanedComponent,
    LoginComponent,
    CoverComponent,
    ReturnSelectComponent,
    LoanedModuleComponent,
    ReturnModuleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
