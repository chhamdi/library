import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {BooksService} from "../services/books.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: any;
  pages = 5000;
  price = 50 ;
  sortedAZ = false ;
  sortedPrice = false ;
  constructor( private route: ActivatedRoute, private service: BooksService,) { }

  ngOnInit() {
    this.service.getBooks()
      .subscribe((response) => {
        this.books = response;
      });

  }
  pagesNumber(pages) {
    this.pages = pages.value ;
  }
  sortingNames() {
    this.sortedAZ = !this.sortedAZ ;
    if (this.sortedAZ  == true)
    this.books.sort(function(book1, book2) {
        if (book1.nom > book2.nom) {
          return 1;
        }

        if (book1.nom < book2.nom) {
          return -1;
        }

        return 0;
      });
    else
   this.books.sort(function(book1, book2) {
        if (book1.nom < book2.nom) {
          return 1;
        }

        if (book1.nom > book2.nom) {
          return -1;
        }

        return 0;
      });
  }

  sortingPrices() {
    this.sortedPrice = !this.sortedPrice ;
    if (this.sortedPrice == true)
      this.books.sort(function(book1, book2) {
        if (parseFloat(book1.prix) > parseFloat(book2.prix)) {
          return 1;
        }

        if (parseFloat(book1.prix) < parseFloat(book2.prix)) {
          return -1;
        }

        return 0;
      });
    else
      this.books.sort(function(book1, book2) {
        if (parseFloat(book1.prix) < parseFloat(book2.prix)) {
          return 1;
        }

        if (parseFloat(book1.prix) > parseFloat(book2.prix)) {
          return -1;
        }
        return 0;
      });
  }
}
