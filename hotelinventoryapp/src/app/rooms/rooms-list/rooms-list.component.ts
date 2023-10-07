import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomType } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }

    console.log(changes);
  }
  ngOnInit(): void {}

  @Input() rooms: RoomType[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomType>();

  selectRoom(room: RoomType): void {
    this.selectedRoom.emit(room);
  }
}
