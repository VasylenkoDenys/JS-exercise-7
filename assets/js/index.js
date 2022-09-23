'use strict';
/*Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
from(число)
to(число)

Реализовать геттеры и сеттеры для обоих свойств.
Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.


Bonus tasks:
Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to.*/


class RangeValidator {
  constructor (from, to){
    if (typeof from !== 'number' && to !== 'number') {
      throw TypeError('Must be a number');
    } 
    if (from >= to || to <= from){
      throw RangeError('Not in the range');
    }
debugger;
    this.from = from;
    this.to = to;
    this.validate = 0;
  }
  get range(){
    if (this.from < this.to)
    return Array(this.to - this.from + 1).fill().map((_, i) => this.from + i)
  }
  set validate(number){
    if (number < this.from || number > this.to){
    throw RangeError('Not in range');
  }
    return number;
  }
  }

const obj1 = new RangeValidator (0, 5);