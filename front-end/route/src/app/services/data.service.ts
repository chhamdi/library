import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class DataService {
  constructor(private url: string, private http: HttpClient) {

  }
  getBooks() {
    return this.http.get(this.url) ;
  }
  getSearchedBook(name: any) {
    return this.http.get(this.url+'/'+name) ;
  }
  getBooksByCategory(name: any) {
    return this.http.get(this.url+'/'+name + '/livres') ;
  }

}
