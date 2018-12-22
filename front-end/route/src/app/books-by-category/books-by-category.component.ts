import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../services/categories.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books-by-category',
  templateUrl: './books-by-category.component.html',
  styleUrls: ['./books-by-category.component.css']
})
export class BooksByCategoryComponent implements OnInit {
  categoryName: any ;
  books: any ;
  pages = 5000;
  price = 50 ;
  sortedAZ = false ;
  sortedPrice = false ;
  constructor(private service: CategoriesService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(
      (params) => {
        this.categoryName = params.get('categorie');
        this.service.getBooksByCategory(this.categoryName)
          .subscribe((response) => {
            this.books = response;
          });
      }
    );
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
