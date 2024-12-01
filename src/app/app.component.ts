import { Component } from '@angular/core';
import {ClockComponent} from './clock/clock.component';
import {LinkBarComponent} from './link-bar/link-bar.component';
import {DataLoader} from '../data-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent, LinkBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'incrediblah';
  fitSize: any;

  constructor(private dataLoader: DataLoader) {
    dataLoader.injectJSON();
    this.fitSize = dataLoader.fitSize;
  }
}
