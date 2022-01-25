import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
