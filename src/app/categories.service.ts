import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  getData(){
    let url=" https://gorest.co.in/public-api/categories";
    return this.http.get(url);
  }
}
