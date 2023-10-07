import { Inject, Injectable } from '@angular/core';
import { RoomType } from '../rooms';
import { environment } from '../../../environments/environment.development';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomType[] = [];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    // console.log(environment.apiUrl);
    console.log('room service initialised...');
  }

  getRooms(): Observable<RoomType[]> {
    return this.http.get<RoomType[]>('/api/rooms'); // proxyconfig will redirect to localhost
  }
}
