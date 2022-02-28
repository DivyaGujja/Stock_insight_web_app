import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partner-insight-web';

  collapseSidebar: boolean = false;

  toggleSidebar(value: boolean) {
    this.collapseSidebar = value;
  }
}
