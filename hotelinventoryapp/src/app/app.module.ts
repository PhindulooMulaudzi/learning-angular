import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
// import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from 'src/init.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
// import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
// import { RoomCreateComponent } from './rooms/room-create/room-create.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './directive/hover.directive';
import { EmailValidatorDirective } from './directive/email-validator.directive';
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    // RoomsComponent,
    // RoomsListComponent,
    // HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    NavbarComponent,
    NotfoundComponent,
    // RoomsBookingComponent,
    // RoomCreateComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
  ],
  imports: [
    BrowserModule,
    // RoomsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HeaderModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
