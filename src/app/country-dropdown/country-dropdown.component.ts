import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../services'
import { countries } from '../ag-grid/countries.const'
import { CountryFilterService } from '../services'

@Component({
  selector: 'country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css'],
  providers: [ GridDataService ]
})
export class CountryDropdownComponent implements OnInit {
  options: any;
  country:string;

  constructor(
    public gridDataService: GridDataService,
    public countryFilterService: CountryFilterService
  ) { }

  ngOnInit() {
    this.options = countries;
  }

  onChange(country){
    this.countryFilterService.changeCountry(country)
  }
}
