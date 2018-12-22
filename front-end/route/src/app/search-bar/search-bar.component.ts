import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {SearchedService} from "../services/searched.service";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../services/data.service";
import {BooksService} from "../services/books.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  bookSearch: any ;
  constructor(private http: HttpClient, private  router: Router, private service: SearchedService) { }

  ngOnInit() {
  }
  searching(bookSearch) {
    this.bookSearch= bookSearch ;
    this.router.navigate(['books/' + this.bookSearch.value]);

  }

}
