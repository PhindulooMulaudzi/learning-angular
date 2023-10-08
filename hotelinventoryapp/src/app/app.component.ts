import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { InitService } from 'src/init.service';
import { localStorageToken } from 'src/localstorage.token';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // this.name.nativeElement.innerText = 'Hilton Hotel'; // its static so will work
    //otherwise just always use ngAfterViewInit
    this.loggerService?.log('AooComponent.ngOnInit()');
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  title = 'hotelinventoryapp';

  role = 'Users';
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService
  ) {
    console.log(this.initService.config);
  }
}
