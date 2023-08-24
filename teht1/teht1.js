'use strict';

const c = +prompt('Anna lämpötila celsiuksina');
const f = c * (9 / 5) + 32;
const k = c + 273.15;
document.getElementById(
  'target'
).innerHTML = `${c} celsius on ${f} fahrenheitia ja ${k} kelviniä`;
