import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html', // أو navbar.component.html
  styleUrl: './navbar.css'     // أو navbar.component.css
})
export class Navbar {}