import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router) {
    this.routeLinks = [
        {
            label: 'Bing Bong',
            link: 'bing'
        }, {
            label: 'Ping Pong',
            link: 'ping'
        }
        ];
    }
    ngOnInit(): void {
        // this.router.events.subscribe((res) => {
        //     this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        // });
        this.router.navigate(['/bing/new']);
      }
}
