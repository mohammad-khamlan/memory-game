import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class AppState {
  private currentRoute = new BehaviorSubject<string>('');

  setRoute(route: string){
    this.currentRoute.next(route);
  }

  getRoute(): Observable<string>{
    return this.currentRoute.asObservable();
  }

}


