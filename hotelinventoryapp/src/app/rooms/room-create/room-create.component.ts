import { Component } from '@angular/core';
import { RoomType } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss'],
})
export class RoomCreateComponent {
  room: RoomType = {
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photo: '',
    price: 0,
    rating: 0,
    roomType: '',
    roomNumber: '',
  };

  successMessage: string = '';

  constructor(private roomService: RoomsService) {}

  addRoom() {
    this.roomService.addRoom(this.room).subscribe((result) => {
      this.successMessage = 'Room Added Succesfully!';
    });
  }
}
