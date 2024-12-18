import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  @Input() name: string = '';
  @Input() age: number = -1;
  @Input() isOnline: boolean = false;
}
