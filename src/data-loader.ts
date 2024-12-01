import config from './config.json';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DataLoader {
  get style(): CSSStyleDeclaration {
    return document.documentElement.style;
  }

  get buttonList() {
    return config.buttons.list;
  }

  get boxBlurEnabled(): boolean {
    return config.box.blur.enabled;
  }

  get fitSize(): boolean {
    return config.box["fit-size"]
  }

  public injectJSON(): void {
    const mappings: Record<string, string> = {
      "--background-style": config["background-style"],

      // Clock
      "--clock-text-color": config.clock["font-color"],
      "--clock-font": config.clock["font-style"],
      "--clock-font-size": config.clock["font-size"],
      "--clock-center-offset-x": config.clock["x-offset"],
      "--clock-center-offset-y": config.clock["y-offset"],
      "--clock-tick": config.clock["clock-tick"],

      // Buttons
      "--button-font": config.buttons["font-family"],
      "--button-font-size": config.buttons["font-size"],
      "--button-font-color": config.buttons["font-color"],
      "--button-hover-text-color": config.buttons["font-hover-color"],
      "--buttons-center-offset-x": config.buttons["x-offset"],
      "--buttons-center-offset-y": config.buttons["y-offset"],
      "--grid-column-pattern": config.buttons["grid-column-pattern"],

      // Box
      "--box-background": config.box.background,
      "--box-border-radius": config.box["border-radius"],
      "--box-blur-strength": config.box.blur.strength
    };

    Object.entries(mappings).forEach(([variable, value]) => {
      this.style.setProperty(variable, value);
    });
  }
}
