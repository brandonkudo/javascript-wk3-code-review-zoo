import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: 'app/edit-animal.component.html'
})

  export class EditAnimalComponent {
    @Input() childSelectedAnimal: Animal;
    @Output() closeButtonClickedSender = new EventEmitter();

    closeButtonClicked() {
      this.closeButtonClickedSender.emit();
    }
  }
