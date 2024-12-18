import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrl: './five.component.css'
})
export class FiveComponent {
  @Output()
  onIncrement = new EventEmitter<number>();
}
