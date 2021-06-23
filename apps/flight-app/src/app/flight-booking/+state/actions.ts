import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';

export const flightsLoaded = createAction('[FlightBooking] Flights loaded', props<{ flights: Flight[] }>());

export const delayFirstFlight = createAction('[FlightBooking] Delay First Flight');
