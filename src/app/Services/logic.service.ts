import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
  
  SlideLogic(List: any, count: number) {
    if (count === (List.length - 1)) count = 0;
    else count++;
    return count;
  }

  SlideText(List: any, Direction: string) {
    if (Direction.toUpperCase() == "LEFT") {
      var RemoveValue = List.shift();
      List.push(RemoveValue);
    }
    if (Direction.toUpperCase() == "RIGHT") {
      var RemoveValue = List.pop();
      List.unshift(RemoveValue);
    }
  }
}
