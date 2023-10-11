import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsComponent,
    RoomCreateComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
})
export class RoomsModule {}
