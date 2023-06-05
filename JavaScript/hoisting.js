// 1번 console.log
// ReferenceError
// console.log(getNumber());
const x = 100;

// 2번 console.log
console.log(getNumber());
function getNumber() {
  return x;
}

// 3번 console.log
console.log(getNumber());

function varFor() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("varFor i: ", i), 0);
  }
}

function letFor() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("letFor i: ", i), 0);
  }
}

varFor(); // 3 3 3
letFor(); // 0 1 2
