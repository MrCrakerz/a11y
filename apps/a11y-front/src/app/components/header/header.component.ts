import {Component, HostListener, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'a11y-header',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);
  authService = inject(AuthService);
  menuVisible = false;
  lastScrollTop = 0;

  goToHome() {
    this.router.navigateByUrl('/');
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToNews() {
    this.router.navigateByUrl('/news');
  }

  logout() {
    this.authService.logout();
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (this.lastScrollTop < currentScrollTop && currentScrollTop > 80) {
      // add 'scrollUp' class
      document.querySelector('nav')?.classList.add('scrollUp');
    } else {
      // remove 'scrollUp' class
      document.querySelector('nav')?.classList.remove('scrollUp');
    }
    this.lastScrollTop = currentScrollTop;
  }

}
