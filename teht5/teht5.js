'use strict';

function main() {
  const luku = +prompt('Enter a positive number: ');

  if (luku < 0) return alert('Number is negative');

  let t = 0;
  for (let i = 0; i <= luku; i++) t += i;

  document.getElementById('target').innerHTML = `sum is ${t}`;
}

main();
