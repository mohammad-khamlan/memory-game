import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { AppState } from './state/appState';
import { AppApi } from './api/app.api';


@Injectable()
export class AppFacade {
  constructor(
    private appState: AppState,
    private router: Router,
  ) { }

  setRoute(route: string) {
    this.appState.setRoute(route);
 }

  getRoute(): Observable<string>{
    return this.appState.getRoute().pipe();
  }

}
