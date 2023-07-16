import { Component } from '@angular/core';
import {MenuService} from './menu.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular-Tree';
menuData:any=[];
  constructor(private menuService: MenuService) {

    this.menuService.getMenuData().subscribe(data=>{
    console.log("data",data);
    this.menuData=data;
    })
   }
}





  