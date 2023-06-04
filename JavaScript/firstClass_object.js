function add(a, b) {
  return a + b;
}

// 함수를 다른 함수의 인자로 넘긴다.
[1, 2, 3].reduce(add, 0);
(() => {
  console.log("익명 함수를 생성한다.");
})();

function outer(a) {
  function inner(b) {
    return a + b;
  } // 중첩 함수를 생성한다.
  return inner(10);
}

const Person = (name) => {
  const printName = () => console.log(name);
  return { printName };
}; // 함수를 리턴하며 closure를 생성한다.

const person = Person("Daniel");
person.printName();

function printName(name) {
  console.log("name : ", name);
}

// 함수끼리 비교한다.
// === 의 경우, 변수가 같은 객체(함수)를 가리키는지 체크한다.
console.log(printName === person.printName);
