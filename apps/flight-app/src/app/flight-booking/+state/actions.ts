import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';
import { SearchParams } from '../search-params';

export const loadFlights = createAction('[FlightBooking] Load Flights', props<{ searchParams: SearchParams }>());

export const flightsLoaded = createAction('[FlightBooking] Flights loaded', props<{ flights: Flight[] }>());

export const delayFirstFlight = createAction('[FlightBooking] Delay First Flight');
