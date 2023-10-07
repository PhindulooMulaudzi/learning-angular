import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoggerService } from './logger.service';
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
    this.loggerService?.log('AooComponent.ngOnInit()');
  }

  title = 'hotelinventoryapp';

  role = 'Users';
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService) {}
}
