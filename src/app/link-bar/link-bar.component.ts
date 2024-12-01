import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {DataLoader} from '../../data-loader';

@Component({
  selector: 'app-link-bar',
  imports: [
    NgForOf
  ],
  templateUrl: './link-bar.component.html',
  standalone: true,
  styleUrl: './link-bar.component.css'
})
export class LinkBarComponent {
  buttons: any;

  constructor(public dataLoader: DataLoader) {
    this.buttons = dataLoader.buttonList;
  }
}
