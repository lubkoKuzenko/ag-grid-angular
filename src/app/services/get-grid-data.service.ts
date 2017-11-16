import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GridDataService {

  constructor(
    private http: HttpClient
  ) { }

  getInitialData(){
    return this.http.get('http://localhost:3500/api')
  }

}
