import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrl: './seven.component.css'
})
export class SevenComponent implements OnChanges {
  @Input() counter: number = 0;

  @Output()
  onIncrement = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("Ändrade counter!");
  }
}
