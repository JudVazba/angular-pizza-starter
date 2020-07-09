import { NgModule } from '@angular/core';
import { LogoutComponent } from './logout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LogoutComponent
  ]
})
export class LogoutModule { }
