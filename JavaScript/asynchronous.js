// 동기 방식
function sleep(callback, delay = 0) {
  const delayMilSec = Date.now() + delay;
  while (Date.now() < delayMilSec) callback();
}

function first() {
  console.log("first");
}

function second() {
  console.log("second");
}

// sleep(first, 3000);
// sleep(second);

// 비동기 방식
setTimeout(first, 3000);
second();
