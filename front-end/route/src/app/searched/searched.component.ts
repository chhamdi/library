import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchedService} from "../services/searched.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {

  book: any;
  bookName: any;

  constructor(private route: ActivatedRoute, private service: SearchedService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.bookName = params.get('bookName');
        this.service.getSearchedBook(this.bookName)
          .subscribe((response) => {
            this.book = response;
          });
      }
    );
  }
}
