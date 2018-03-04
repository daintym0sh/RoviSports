import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bing-main',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.css']
})
export class BingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/bing' || this.router.url === '/'){
      this.router.navigate(['/bing/new']);
    }
  }

}
