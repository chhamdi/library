import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import {HttpClientModule} from "@angular/common/http";
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';
import {RouterModule, Routes} from "@angular/router";
import { SearchedComponent } from './searched/searched.component';
import {DataService} from "./services/data.service";
import { BooksByCategoryComponent } from './books-by-category/books-by-category.component';
import {FormsModule} from "@angular/forms";

const  appRoute: Routes = [
  {path: '', component: BooksListComponent},
  {path: ':categorie', component: BooksByCategoryComponent},
  {path: 'books/:bookName', component: SearchedComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CategoryBarComponent,
    BooksListComponent,
    BookComponent,
    SearchedComponent,
    BooksByCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
