/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Flight } from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delayFirstFlight, loadFlights } from '../+state/actions';
import { selectFlights } from '../+state/selectors';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };
  flights$: Observable<Flight[]>;

  constructor(
    private store: Store) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(selectFlights);
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(loadFlights({
      from: this.from,
      to: this.to,
      urgent: this.urgent
    }));
  }

  delay(): void {
    this.store.dispatch(delayFirstFlight());
  }

}
