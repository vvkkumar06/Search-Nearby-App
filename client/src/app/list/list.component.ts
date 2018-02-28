import { Component, OnInit, Input } from '@angular/core';
import { SearchData } from '../search';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input("inSearchData") searchData: SearchData[]; 
  order: string = "icon";
  sortByname: boolean=false;
  sortByrating: boolean=false;
  reverse: boolean= false;
  constructor() { }

  ngOnInit() {
    }
  sortByName(){
  
    this.order = "name";
    this.sortByname = !this.sortByname;
    if(this.sortByname){
      this.reverse = true;
    }
    else if(!this.sortByname){
      this.reverse = false;
    }
  }
  sortByRating(){
   
    this.order = "rating";
    this.sortByrating = !this.sortByrating;
    if(this.sortByrating){
      this.reverse = true;
    }
    else if(!this.sortByrating){
      this.reverse = false;
    }
  }
  noData(): boolean{
      
      for(let d of this.searchData[0].toString()){
        if(d) return true;
        else false;
      }
  }
  

}
