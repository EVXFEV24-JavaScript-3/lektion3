import { Component, Input } from '@angular/core';
import { Country } from '../three/three.component';

@Component({
  selector: 'app-three-row',
  templateUrl: './three-row.component.html',
  styleUrl: './three-row.component.css'
})
export class ThreeRowComponent {
  @Input()
  country: Country = new Country('', '', 0);
}
