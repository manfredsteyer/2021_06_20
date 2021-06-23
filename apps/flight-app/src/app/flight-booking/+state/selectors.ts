import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, FlightBookingState } from './reducer';

const selectState = createFeatureSelector<FlightBookingState>(featureKey);

export const selectFlights = createSelector(selectState, state => state.flights);
