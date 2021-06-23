import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';

export const loadFlights = createAction('[FlightBooking] Load Flights', props<{ from: string, to: string, urgent: boolean }>());

export const flightsLoaded = createAction('[FlightBooking] Flights loaded', props<{ flights: Flight[] }>());

export const delayFirstFlight = createAction('[FlightBooking] Delay First Flight');
