import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  images: string[] = [
    '../assets/images/gallery/gallery1.png',
    '../assets/images/gallery/gallery2.png',
    '../assets/images/gallery/gallery3.png',
    '../assets/images/gallery/gallery4.png',
    '../assets/images/gallery/gallery1.png',
    '../assets/images/gallery/gallery2.png',
    '../assets/images/gallery/gallery3.png',
    '../assets/images/gallery/gallery4.png',
    '../assets/images/gallery/gallery1.png',
    '../assets/images/gallery/gallery2.png',
    '../assets/images/gallery/gallery3.png',
    '../assets/images/gallery/gallery4.png'
  ];
  currentIndex: number = 0;

  showImages: string[] = this.images.slice(0, 4);

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateImages();
    }
  }

  next(): void {
    if (this.currentIndex < this.images.length - 4) {
      this.currentIndex++;
      this.updateImages();
    }
  }

  updateImages(): void {
    this.showImages = this.images.slice(this.currentIndex, this.currentIndex + 4);
  }
}