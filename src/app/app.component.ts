import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hoa Tươi Mai Phương';
  public constructor(private titleService: Title) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  showStepperComp: boolean = true;

  showHideStepperComp(value:any) {
    this.showStepperComp = value;
  }
}
