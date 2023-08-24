'use strict';

function main() {
  const luku = +prompt('Enter a positive number: ');

  if (luku < 0) return alert('Number is negative');

  document.getElementById('target').innerHTML = 'Multiplication table';
  for (let i = 1; i <= luku; i++) {
    document.getElementById('table').innerHTML += `<tr id="row${i}">`;
    for (let j = 1; j <= luku; j++) {
      const tulo = i * j;
      document.getElementById(`row${i}`).innerHTML += `<td> ${tulo} </td>`;
    }
    document.getElementById('table').innerHTML += '</tr>';
  }
}

main();
