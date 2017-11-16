import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CountryFilterService {
  private country;
  public selectedCountry$;

  constructor() {
    this.country = new BehaviorSubject<string>("")
    this.selectedCountry$ = this.country.asObservable()
  }

  changeCountry(country: string) {
    this.country.next(country);
  }
}