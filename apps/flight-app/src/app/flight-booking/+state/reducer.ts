import { Flight } from '@flight-workspace/flight-lib';
import { createReducer } from '@ngrx/store';
import { immerOn } from 'ngrx-immer/store';
import { SearchParams } from '../search-params';
import { delayFirstFlight, flightsLoaded, loadFlights } from './actions';

export interface FlightBookingState {
  flights: Flight[];
  searchParams: SearchParams
}

const initialState = {
  flights: [],
  searchParams: {
    from: 'Wien',
    to: 'Berlin',
    urgent: false
  }
};

export const featureKey = 'flightBooking';

export const reducer = createReducer<FlightBookingState>(initialState,
  immerOn(loadFlights, (state, action) => {
    state.searchParams = action.searchParams;
  }),
  immerOn(flightsLoaded, (state, action) => {
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
