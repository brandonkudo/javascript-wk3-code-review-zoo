import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: 'app/new-animal.component.html'
})

export class NewAnimalComponent {
  @Input() childShowAnimalForm;
  @Output() newAnimalSender = new EventEmitter();
  @Output() exitNewAnimalFormClickedSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  exitNewAnimalFormClicked() {
    this.exitNewAnimalFormClickedSender.emit();
  }
}
