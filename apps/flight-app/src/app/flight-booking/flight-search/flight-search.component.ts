/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Flight } from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delayFirstFlight, loadFlights } from '../+state/actions';
import { selectFlights, selectSearchParams } from '../+state/selectors';
import { SearchParams } from '../search-params';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  searchParams$: Observable<SearchParams> = this.store.select(selectSearchParams);

  urgent = false;
  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };
  flights$: Observable<Flight[]>;

  constructor(
    private store: Store, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(selectFlights);
  }

  search(searchParams: SearchParams): void {
    this.store.dispatch(loadFlights({ searchParams }))
    ;
  }

  delay(): void {
    this.store.dispatch(delayFirstFlight());
  }

}
