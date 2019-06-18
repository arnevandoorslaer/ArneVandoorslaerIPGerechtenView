import {Component, Input, OnInit} from '@angular/core';
import {WeekMenu} from './menu';
import {timer} from 'rxjs';
import {GerechtService} from './gerecht.service';
import {Dagmenu} from './dagmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.min.css']
})

export class AppComponent implements OnInit {

  constructor(private data: GerechtService) {
  }

  title = 'GerechtenApp';

  weekMenus: WeekMenu[] = [];

  dagmenus: Dagmenu[] = [];

  @Input() menu: WeekMenu;

  init(weekmenus: WeekMenu[]) {
    for (const weekmenu of weekmenus) {
      for (const dagmenu of weekmenu.dagMenus) {
        this.dagmenus.push(dagmenu);
      }
    }
  }

  ngOnInit() {
    timer(0, 2500).subscribe(() => {
      this.data.getMenus().subscribe(data => {
        this.dagmenus = [];
        this.weekMenus = data;
        this.init(this.weekMenus);
      });
    });
  }
}
