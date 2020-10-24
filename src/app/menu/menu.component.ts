import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu;


  constructor() {
  }

  ngOnInit(): void {

    this.menu = [
      {
        name: 'link 1',
        submenus: [{name: 'submenu 1'}],
      },
      {
        name: 'link 2',
        submenus: [{
          name: 'submenu 2',
          submenus: [{
            name: 'submenu 3'
          }],
        }],
      },
    ];
  }

}
