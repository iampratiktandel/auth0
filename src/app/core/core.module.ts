import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './components/master/master.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    MasterComponent, 
    AuthCallbackComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MasterComponent
  ]
})
export class CoreModule { }
