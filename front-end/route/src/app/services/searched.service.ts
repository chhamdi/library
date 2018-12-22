import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchedService extends DataService{
  name:any ;
  constructor(http: HttpClient) {
    super('http://localhost:8080/library/livre', http) ;
  }

}
