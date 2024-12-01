import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  standalone: true,
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  constructor() {
    this.tick();
  }

  get getClock(): HTMLElement | null {
    return document.getElementById("clock");
  }

  public getTime() {
    let dateTime: Date = new Date();
    return dateTime.toLocaleTimeString();
  }

  public updateTime() {
    if(this.getClock) {
      this.getClock.textContent = this.getTime();
      return;
    }
    console.error("Could not locate clock element.")
  }

  public tick() {
    this.updateTime();
    const tickCount: number = +document.documentElement.style.getPropertyValue("--clock-tick");
    setInterval(() => this.updateTime(), tickCount);
  }
}
