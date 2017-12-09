import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  currentFocus: string = 'Zoo';
  public species: string
  public name: string
  public age: number
  public diet: string
  public location: string
  public caretakers: number
  public sex: string
  public likes: string
  public dislikes: string

  public masterAnimalList: Animal[] = [
    new Animal('Dog', 'Brandon', 25, 'Carnivore', 'Santa Monica', 2, 'Male', 'Food', 'Bees'),
    new Animal('Cat', 'Taylor', 12, 'Vegeterian', 'Portland', 4, 'Female', 'Cats', 'Alfredo'),
    new Animal('Bird', 'Eric', 30, 'Carnivore', 'Tualatin', 3, 'Male', 'Stuff', 'Bees'),
  ];

  showAnimalForm = null;
  selectedAnimal = null;

  editAnimal(animalToEdit) {
    this.selectedAnimal = animalToEdit;
  }

  nullEdit() {
    this.selectedAnimal = null;
  }

  addNewAnimalForm(animalToEdit) {
    this.showAnimalForm = !null;
  }

  nullAnimalForm() {
    this.showAnimalForm = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    console.log("hi");
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
