import { Inject, Injectable } from '@angular/core';
import { RoomType } from '../rooms';
import { environment } from '../../../environments/environment.development';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
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

  addRoom(room: RoomType) {
    return this.http.post<RoomType[]>('/api/rooms', room);
  }

  editRoom(room: RoomType) {
    return this.http.put<RoomType[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(room: RoomType) {
    return this.http.delete<RoomType[]>(`/api/rooms/${room.roomNumber}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      { reportProgress: true }
    );

    return this.http.request(request);
  }
}
