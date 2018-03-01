import { Component, OnInit } from '@angular/core';
import { SearchnearbyService } from './searchnearby.service';
import { Observable } from 'rxjs/Observable';
import  { SearchData } from './search';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  searchData: SearchData[]=[];

  constructor(private _searchService: SearchnearbyService){}

  getResult(searchStr: string): void{
      this.searchData = [];
    this._searchService.getData(searchStr)
        .subscribe(rslt=> 
            rslt.results.forEach(data=>{
               this.searchData.push(data);
            })
        );
  }
  ngOnInit(){
    //console.log(this.searchData);
  }
}
