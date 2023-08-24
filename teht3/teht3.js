'use strict';

const side1 = prompt('Enter side 1: ');
const side2 = prompt('Enter side 2: ');
const side3 = prompt('Enter side 3: ');

const answers = {
  0: 'Equilateral triangle',
  1: 'Isosceles triangle',
  2: 'Scalene triangle',
};

function writeAnswer(answer) {
  document.getElementById('target').innerHTML = answers[answer];
}

if (side1 === side2 && side2 === side3) writeAnswer(0);
else if (side1 === side2 || side2 === side3 || side1 === side3) writeAnswer(1);
else writeAnswer(2);
