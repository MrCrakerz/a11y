import { Route } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {mustBeLoggedOutGuard} from "./services/must-be-logged-out.guard";
import {mustBeLoggedInGuard} from "./services/must-be-logged-in.guard";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {NewsDetailsPageComponent} from "./pages/news-details-page/news-details-page.component";
import {RgpdPageComponent} from "./pages/rgpd-page/rgpd-page.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-page/about.routes').then(m => m.aboutRoutes)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact.routes').then(m => m.contactRoutes)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register-page/register.routes').then(m => m.registerRoutes),
    canActivate: [mustBeLoggedOutGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login.routes').then(m => m.loginRoutes),
    canActivate: [mustBeLoggedOutGuard]
  },
  {
    path: 'lists',
    loadChildren: () => import('./pages/lists-page/lists.routes').then(m => m.listsRoutes),
    canActivate: [mustBeLoggedInGuard]
  },
  {
    path: 'news/:id',
    component: NewsDetailsPageComponent
  },
  {
    path: 'news',
    component: NewsPageComponent
  },
  {
    path: '403-in',
    loadChildren: () => import('./pages/not-allowed-logged-in-page/not-allowed-logged-in.routes').then(m => m.notAllowedLoggedInRoutes),
  },
  {
    path: '403-out',
    loadChildren: () => import('./pages/not-allowed-logged-out-page/not-allowed-logged-out.routes').then(m => m.notAllowedLoggedOutRoutes),
  },
  {
    path: 'rgpd',
    component: RgpdPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
