import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {en, fr} from "./translations/en";
//import {NewsletterComponent} from "./components/newsletter/newsletter.component";
import {CookieBannerComponent} from "./components/cookie-banner/cookie-banner.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, CookieBannerComponent, HeaderComponent, FooterComponent],
  selector: 'a11y-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-front';

  constructor(private readonly translate: TranslateService) {
    this.manageTranslations();
  }

  private manageTranslations() {
    // Si vous devez ajouter une langue, ajoutez-la au tableau ci-dessous, et ajoutez une nouvelle ligne "translate.setTranslation" également.
    const availableLanguages = ['en', 'fr'];
    this.translate.setTranslation('en', en);
    this.translate.setTranslation('fr', fr);
    this.translate.setDefaultLang(availableLanguages[1]);

    // Ceci est un système de gestion de langue très basique. Il ne gère pas les locales (en-US, en-GB, etc.), et les fichiers
    // sont importés de manière statique. Il se peut qu'il ne soit pas très évolutif si nous obtenons de nombreuses traductions.
    const browserLanguages = window.navigator?.languages || [];
    console.log(browserLanguages);
    for (const language of browserLanguages) {
      const languageCode = language.split('-')[0]?.toLowerCase();
      if (availableLanguages.indexOf(languageCode) >= 0) {
        this.translate.use(languageCode);
        return;
      }
    }
  }
}
