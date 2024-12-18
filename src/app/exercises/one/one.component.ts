import { Component, Input } from '@angular/core';

export enum Size {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small'
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  @Input()
  size: Size = Size.Medium;

  @Input() text: string = '';
}
