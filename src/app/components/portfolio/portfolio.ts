import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-portfolio',
  styleUrl: './portfolio.css',
  templateUrl: './portfolio.html',
})
export class Portfolio {
  projects: string[] = [
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png',
    'images/poert1.png',
    'images/port2.png',
    'images/port3.png'
  ]
}
