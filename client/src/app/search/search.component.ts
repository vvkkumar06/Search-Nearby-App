import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output('searchString') searchString = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onSearchBtn(query: string){
    if(query){
      this.searchString.emit(query);
    }
  }
}
