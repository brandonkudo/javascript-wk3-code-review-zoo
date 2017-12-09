import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "agepipe",
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredSort) {
    let output: Animal[] = input;
    if (desiredSort === "YoungAnimals") {
      let output: Animal[] = [];

      for (let i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          console.log("dog");
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSort === "MatureAnimals") {
      let output: Animal[] = [];
      for (let i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          console.log("cat");
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
