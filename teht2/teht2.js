'use strict';

const x1 = prompt('Enter x1: ');
const y1 = prompt('Enter y1: ');
const x2 = prompt('Enter x2: ');
const y2 = prompt('Enter y2: ');

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
document.getElementById('target').innerHTML = `distance is ${distance}`;
