import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimages',
  templateUrl: './toggleimages.component.html',
  styleUrl: './toggleimages.component.css'
})
export class ToggleimagesComponent {
  camelion: string = "camelion";
  imgSrc: string = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
  imgName: string = "camelion";

  changeImage(): void {
    if (this.camelion === "camelion") {
      this.imgSrc = "https://img.freepik.com/premium-photo/colorful-flower-with-green-leaf_1028782-202406.jpg";
      this.imgName = "flower";
      this.camelion = "flower";
    } else {
      this.imgSrc = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
      this.imgName = "camelion";
      this.camelion = "camelion";
    }
  }
}


