/* Array.prototype.forEach() */

const result = [1, 2, 3, 4, 5].forEach((value, index) => {
  console.log("index:", index, "value:", value);
});

/* 출력
index: 0 value: 1
index: 1 value: 2
index: 2 value: 3
index: 3 value: 4
index: 4 value: 5
*/
console.log(result); // undefined

/* Array.prototype.map() */
const result2 = [1, 2, 3, 4, 5].map((value, index) => {
  console.log("index:", index, "value:", value);
  return value + 1;
});
console.log(result2); // [2,3,4,5,6]

/* Array.prototype.filter() */
const result3 = [1, 2, 3, 4, 5].filter((value, index) => {
  console.log("index:", index, "value:", value);
  return value > 3; // 배열의 원소 중 3초과인 원소만 true로 만든다.
});
console.log(result3); // [ 4, 5 ]

/* Array.prototype.every() */
const result4 = [1, 2, 3, 4, 5].every((value, index) => {
  console.log("index:", index, "value:", value);
  return value > 0; // 주어진 배열이 0보다 큰 지를 검사한다.
});

console.log(result4);

/* Array.prototype.reduce() */
// sum - 누적된 값
// value - 순회중인 배열의 원소
// index - 배열 원소의 인덱스
// arr - 원본배열

// reduce 메서드의 두번째 인자는 누적된 값의 초기값을 결정한다

const result5 = [1, 2, 3, 4, 5].reduce((sum, value, index, arr) => {
  console.log("index:", index, "value:", value, "arr:", arr);
  return sum + value;
}, 0);

/* 출력
index: 0 value: 1 arr: [ 1, 2, 3, 4, 5 ]
index: 1 value: 2 arr: [ 1, 2, 3, 4, 5 ]
index: 2 value: 3 arr: [ 1, 2, 3, 4, 5 ]
index: 3 value: 4 arr: [ 1, 2, 3, 4, 5 ]
index: 4 value: 5 arr: [ 1, 2, 3, 4, 5 ]
*/
console.log(result5); // 15
