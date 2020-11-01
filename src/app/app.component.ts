import { Component } from '@angular/core';
import {CategoriesService} from './categories.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stredge-test';
  constructor(private categories : CategoriesService){

    this.categories.getData().subscribe(data=>{

      console.warn(data)
    })
  }


  
}
