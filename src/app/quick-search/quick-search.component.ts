import { Component, Input } from '@angular/core'
import { QuickSearchService } from '../services'

@Component({
  selector: 'quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent {
  @Input() query: String;

  constructor(
    public quickSearchService: QuickSearchService
  ) { }

  onChange(query: string) {
    this.quickSearchService.changeQuery(query)
  }
}
