import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://gorest.co.in/public-api/comments";
    return this.http.get(url);
  }
}
