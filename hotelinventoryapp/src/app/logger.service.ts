import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //We inject logger as optional so if this removed wont error out!
})
export class LoggerService {
  constructor() {}

  log(msg: string) {
    console.log(msg);
  }
}
