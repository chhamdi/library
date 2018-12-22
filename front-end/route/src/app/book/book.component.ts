import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BooksService} from "../services/books.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()books: any;
  @Input() categoryName ;
  @Input() searchedBook ;
  @Input() book ;

  constructor(private service: BooksService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}

