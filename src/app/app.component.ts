import { Component, ViewChild } from '@angular/core';
import { TextboxComponent } from './textbox/textbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(TextboxComponent, { static: false }) textbox: TextboxComponent;
  title = 'PassportPoc';
  onClick() {
    this.textbox.addCube();
  }
}
