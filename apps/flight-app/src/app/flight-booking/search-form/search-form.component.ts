import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchParams } from '../search-params';


@Component({
  selector: 'flight-workspace-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnChanges {
  @Input() searchParams: SearchParams | undefined;
  @Output() search = new EventEmitter<SearchParams>();

  formGroup = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
    urgent: []
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(): void {
    if (this.searchParams) {
      this.formGroup.setValue(this.searchParams);
    }
  }

  handleSubmit() {
    this.search.emit(this.formGroup.value);
  }
}
