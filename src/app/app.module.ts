import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { FormsModule }   from '@angular/forms';
import { AgGridComponent } from './ag-grid/ag-grid.component';

// HttpClient
import { HttpClientModule } from '@angular/common/http';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { CountryFilterService, QuickSearchService } from './services';
import { QuickSearchComponent } from './quick-search/quick-search.component'

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    CountryDropdownComponent,
    QuickSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [CountryFilterService, QuickSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
