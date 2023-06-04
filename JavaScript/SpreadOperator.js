/* 객체 */
let o = {
  name: "Daniel",
  age: 23,
  address: "Street",
  job: "Software Engineer",
};
let o2 = { ...o, name: "Tom", age: 24 };
let o3 = { name: "Tom", age: 24, ...o };

console.log(o2.job);
console.log(o3.name);

/* 배열 */
// findMinInObject에서는 객체의 필드들 중 최소값을 반환한다.
// Object.values는 객체 값들의 배열을 반환한다.
function findMinInObject(o) {
  return Math.min(...Object.values(o));
}

let o4 = { a: 1 };
let o5 = { b: 3 };
let o6 = { c: 3 };
console.log(findMinInObject(o4, o5, o6)); //1
