import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nine',
  templateUrl: './nine.component.html',
  styleUrl: './nine.component.css'
})
export class NineComponent {
  @Input()
  taskName: string = '';

  isDone: boolean = false;

  markAsDone(): void {
    this.isDone = true;
  }

  markAsUndone(): void {
    this.isDone = false;
  }
}