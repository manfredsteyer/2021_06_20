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
    switchMap(({ searchParams }) => this.flightService.find(searchParams.from, searchParams.to, searchParams.urgent).pipe(
      catchError(() => of([])))),
    map(flights => flightsLoaded({ flights }))
  ));

  constructor(private flightService: FlightService, private actions$: Actions) {
  }

}
