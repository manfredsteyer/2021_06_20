import { Injectable } from '@angular/core';
import { FlightService } from '@flight-workspace/flight-lib';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { flightsLoaded, loadFlights } from './actions';


@Injectable()
export class FlightBookingEffects {
  loadFlights$ = createEffect(() => this.actions$.pipe(
    ofType(loadFlights),
    switchMap(action => this.flightService.find(action.from, action.to, action.urgent).pipe(
      catchError(() => of([])))),
    map(flights => flightsLoaded({ flights }))
  ));

  constructor(private flightService: FlightService, private actions$: Actions) {
  }

}
