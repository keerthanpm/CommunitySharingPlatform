import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;
 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Your Feed',
            link: 'yourfeed',
            index: 1
        }, {
            label: 'Global Feed',
            link: 'globalfeed',
            index: 2
        }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
 
}
