import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {NewsService} from "./news.service";
import {NewsletterComponent} from "../../components/newsletter/newsletter.component";

@Component({
  selector: 'a11y-news-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent,NewsletterComponent, FooterComponent],
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent {
  private readonly newsService = inject(NewsService);
  allNews$ = this.newsService.getNews() ;
}
