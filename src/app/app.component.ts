import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-shop';
  show = "recipes";

  onNavigate(val: string) {
    this.show = val;
  }
}
