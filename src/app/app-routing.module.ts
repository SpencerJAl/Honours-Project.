import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BorrowComponent } from './components/borrow/borrow.component';
import { LoginComponent } from './components/login/login.component';
import { LoanedComponent } from './components/loaned/loaned.component';
import { ReturnComponent } from './components/return/return.component';
import { ScanComponent } from './components/scan/scan.component';
import { CoverComponent } from'./components/cover/cover.component';
import { ReturnSelectComponent } from './components/return-select/return-select.component';

const routes: Routes = [
  {path: '', redirectTo: '/cover', pathMatch: 'full'},
  { path: 'cover', component: CoverComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'borrow', component: BorrowComponent},
  { path: 'login', component: LoginComponent},
  { path: 'loaned', component: LoanedComponent},
  { path: 'return', component: ReturnComponent},
  { path: 'scan', component: ScanComponent},
  { path: 'returnSelect', component: ReturnSelectComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
