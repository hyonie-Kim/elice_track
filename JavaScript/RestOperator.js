/* 함수 인자 Rest Operator */
// 함수 인자 rest operator는, 인자들을 배열로 묶는다.
// rest에는 숫자들이 배열로 담긴다.
// reduce 함수로 min 값을 리턴한다.
function findMin(...rest) {
  return rest.reduce((a, b) => (a < b ? a : b));
}
findMin(7, 3, 5, 2, 4, 1); // 1

/* 객체 Rest Operator */

const o = {
  name: "Daniel",
  age: 23,
  address: "Street",
  job: "Software Engineer",
};

const { age, name, ...rest } = o;

/* 배열 Rest Operator */
// sumArray의 tail 변수는, 첫번째 원소 head를 제외한 나머지 값들을 배열로 묶는다.
// tail은 하나씩 줄어들게 되며, 길이가 0이 되면 합을 반환한다.
function sumArray(sum, arr) {
  if (arr.length === 0) return sum;
  const [head, ...tail] = arr;
  return sumArray(sum + head, tail);
}

console.log(sumArray(0, [1, 2, 3, 4, 5]));
