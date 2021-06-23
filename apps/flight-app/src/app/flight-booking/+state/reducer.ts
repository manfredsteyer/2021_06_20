import { Flight } from '@flight-workspace/flight-lib';
import { createReducer } from '@ngrx/store';
import { immerOn } from 'ngrx-immer/store';
import { delayFirstFlight, flightsLoaded } from './actions';

export interface FlightBookingState {
  flights: Flight[];
}

export const featureKey = 'flightBooking';
export const reducer = createReducer<FlightBookingState>({
  flights: []
}, immerOn(flightsLoaded, (state, action) => {
  state.flights = action.flights;

}), immerOn(delayFirstFlight, (state) => {
  if (state.flights.length === 0) {
    return state;
  }

  const flight = state.flights[0];
  const oldDate = new Date(flight.date);
  const newDate = new Date(oldDate.getTime() + 15 * 60 * 1000);
  flight.date = newDate.toISOString();
}));
