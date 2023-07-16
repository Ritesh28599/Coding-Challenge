import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  

  constructor(private http: HttpClient) { }

  getMenuData() {
    let apiUrl = 'http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173';
    return this.http.get<any[]>(apiUrl);

    
  }
}
