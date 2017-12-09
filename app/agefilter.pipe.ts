import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "agepipe",
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredSort) {
    let output: Animal[] = input;
    let outputArray: Animal[] = [];

    if (desiredSort === "YoungAnimals") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          console.log("dog");
          outputArray.push(input[i]);
        }
      }
      return outputArray;

    } else if (desiredSort === "MatureAnimals") {
      // let output: Animal[] = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          console.log("cat");
          outputArray.push(input[i]);
        }
      }
      return outputArray;

    } else if (desiredSort === "YoungestToOldest") {
      input.sort(function(a: Animal, b: Animal) {
        return a.age-b.age
      })
      return output;

    } else {
      return input;
    }
  }

}
