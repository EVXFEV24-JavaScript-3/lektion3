import { Component } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrl: './four.component.css'
})
export class FourComponent {
  counter: number = 0;

  incrementCounter(): void {
    this.counter += 1;
  }
}
