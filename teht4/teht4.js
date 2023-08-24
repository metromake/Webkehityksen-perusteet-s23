'use strict';

const score = prompt('Enter score');

function writeAnswer(answer) {
  document.getElementById('target').innerHTML = answer;
}

if (score >= 0 && score <= 39) writeAnswer('grade: 0');
else if (score >= 40 && score <= 51) writeAnswer('grade: 1');
else if (score >= 52 && score <= 63) writeAnswer('grade: 2');
else if (score >= 64 && score <= 75) writeAnswer('grade: 3');
else if (score >= 76 && score <= 87) writeAnswer('grade: 4');
else if (score >= 88 && score <= 100) writeAnswer('grade: 5');
else writeAnswer('invalid score');
