import { Component } from '@angular/core';

import { Pet } from 'pet-store';

@Component({
  selector: 'viz-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  selectedPet: Pet;
}
