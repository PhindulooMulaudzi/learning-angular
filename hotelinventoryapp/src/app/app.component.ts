import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton Hotel'; // its static so will work
    //otherwise just always use ngAfterViewInit
  }

  title = 'hotelinventoryapp';

  role = 'Users';
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }

  @ViewChild('name', { static: true }) name!: ElementRef;
}
