import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class QuickSearchService {
  private query;
  public selectedQuery$;

  constructor() {
    this.query = new Subject<string>()
    this.selectedQuery$ = this.query.debounceTime(300).distinctUntilChanged().flatMap((search) => Observable.of(search))
  }

  changeQuery(query: string) {
    this.query.next(query);
  }
}