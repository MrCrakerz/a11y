import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'a11y-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  goBack() {
    history.back();
  }
}
