import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() { 
    this.logs = [
      {id: '1', text:'generated components', date: new Date('01/01/2018 12:54:30')},
      {id: '2', text:'Added Bootstrap', date: new Date('01/03/2018 12:54:30')},
      {id: '3', text:'Added logs components', date: new Date('01/03/2018 12:54:30')},
    ]
  }

  getLogs() {
    return this.logs;
  }
}
