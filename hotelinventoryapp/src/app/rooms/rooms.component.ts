import { HttpEventType } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomType } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  // this.headerComponent.title = 'Rooms View';
  // console.log(this.headerComponent);
  // console.log((this.headerChildrenComponent.last.title = 'Last Title'));

  ngAfterViewChecked(): void {}

  ngDoCheck(): void {
    console.log('on changes called...');
  }

  roomList: RoomType[] = [];
  hotelName: string = 'Hilton Hotel';
  numberOfRooms = 10;
  title: string = 'Room list';
  selectedRoom!: RoomType;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  hideRooms: boolean = false;
  toggle(): void {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  stream: Observable<string> = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
    // observer.error('error');
  });

  ngOnInit(): void {
    // console.log(this.headerComponent);
    // this.roomList = this.roomService.getRooms();
    this.roomService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });

    this.stream.subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => console.log(err),
    });

    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Response:
      }
    });
  }

  selectRoom(room: RoomType): void {
    this.selectedRoom = room;
    // console.log(room);
  }

  deletedRoom(room: RoomType) {
    this.roomService.deleteRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  addRoom(): void {
    const room: RoomType = {
      // roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2000,
      photo:
        'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.5,
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomType = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 4000,
      photo:
        'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.5,
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  ngAfterViewInit(): void {
    /***Chanigng headerComponent since it doesnt have any @Input and @Ouptut will give error only in dev environment */
    // this.headerComponent.title = 'Rooms View';
    // console.log(this.headerComponent);
    // console.log((this.headerChildrenComponent.last.title = 'Last Title'));
  }

  // { static: true } - accessible anywhere
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomService: RoomsService) {
    // this.roomList = roomService.getRooms();
  }
}
