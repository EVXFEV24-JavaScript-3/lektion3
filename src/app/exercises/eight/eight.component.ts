import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrl: './eight.component.css'
})
export class EightComponent {
  @Input()
  buttonText: string = '';

  isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
