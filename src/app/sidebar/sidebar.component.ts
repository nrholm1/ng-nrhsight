import { Component, OnInit } from '@angular/core';
import { sectionModel } from './sectionLinks';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sections: sectionModel[] = [{title: "Sales Volume", link: "/sales"},
                           {title: "Latest Orders", link: "/orders"},
                           {title: "System Health", link: "/health"}];

  constructor() { }

  ngOnInit(): void {
  }

}
