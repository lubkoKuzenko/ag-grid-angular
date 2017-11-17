import { Component, OnInit } from '@angular/core';
import { countries } from '../ag-grid/countries.const'
import { CountryFilterService } from '../services'

@Component({
  selector: 'country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {
  options: any;

  constructor(
    public countryFilterService: CountryFilterService
  ) { }

  ngOnInit() {
    this.options = countries;
  }

  onChange(country: string){
    this.countryFilterService.changeCountry(country)
  }
}
