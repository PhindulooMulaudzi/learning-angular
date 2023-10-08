import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent {
  // roomNumber!: Observable<number>;

  roomNumber$ = this.router.paramMap.pipe(
    map((params) => params.get('number'))
  );

  constructor(private router: ActivatedRoute) {
    //   this.roomNumber = router.params.pipe(
    //     map((param) => {
    //       return param['number'];
    //     })
    //   );
  }
}
