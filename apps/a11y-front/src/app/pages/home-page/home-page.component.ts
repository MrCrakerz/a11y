import {Component, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'a11y-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    const imgContent = document.querySelectorAll('.img-content-hover');

    function showImgContent(e: MouseEvent) {
      for(let i = 0; i < imgContent.length; i++) {
        const x = e.pageX;
        const y = e.pageY;
        (imgContent[i] as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', showImgContent); 
  }
}
