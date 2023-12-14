import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'a11y-rgpd-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './rgpd-page.component.html',
  styleUrls: ['./rgpd-page.component.scss'],
})

export class RgpdPageComponent {

}
