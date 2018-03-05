import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bing-main',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.css']
})
export class BingComponent {

  constructor(private router: Router) {
  }
}
