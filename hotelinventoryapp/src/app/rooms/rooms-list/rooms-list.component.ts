import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RoomType } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit {
  ngOnInit(): void {}
  @Input() rooms: RoomType[] = [];
  @Output() selectedRoom = new EventEmitter<RoomType>();

  selectRoom(room: RoomType): void {
    this.selectedRoom.emit(room);
  }
}
