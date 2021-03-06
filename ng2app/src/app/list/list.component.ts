import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from "../common/item";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Item[];

  dataService = null;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    var d =
      this.dataService
        .getDataObservable()
        .subscribe(
        list => this.list = list,
        error => console.error("Error", error),
        () => console.log('Done')
        );
    //this.list = this.dataService.getData();
  }


}
