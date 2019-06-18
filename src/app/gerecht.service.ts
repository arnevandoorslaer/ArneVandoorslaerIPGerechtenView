import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeekMenu} from './menu';

@Injectable({
  providedIn: 'root'
})
export class GerechtService {

  constructor(private http: HttpClient) {
  }

  getMenus() {
    const geturl = 'http://localhost:8080/weekMenu';
    return this.http.get<WeekMenu[]>(geturl);
  }
}
