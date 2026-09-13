import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  experienceYears :number = 2;
  skills: string[] = ['Angular 19', 'TypeScript', 'Bootstrap 5', 'HTML5/CSS3', 'Git & GitHub'];
}
