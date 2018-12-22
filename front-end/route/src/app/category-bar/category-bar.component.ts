import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../services/categories.service";

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent implements OnInit {

  categories: any ;
  constructor(private service: CategoriesService) { }

  ngOnInit() {
    this.service.getBooks()
    .subscribe((response) => {
        this.categories = response ;
      });
  }


}
