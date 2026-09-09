import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home | Mohamed Ahmed' },
  { path: 'about', component: About, title: 'About | Mohamed Ahmed' },
  { path: 'portfolio', component: Portfolio, title: 'Portfolio | Mohamed Ahmed' },
  { path: 'contact', component: Contact, title: 'Contact | Mohamed Ahmed' },
  { path: '**', component: Notfound, title: '404 | Page Not Found' }
];