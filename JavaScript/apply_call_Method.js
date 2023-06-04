/* 생성자 함수 방식 */
function createObject() {
  this.myFunc = function () {
    console.log("myFunc this:", this);
    return function () {
      console.log("myFunc return this:", this);
    };
  };
}

const o = new createObject();
o.myFunc().call(o, null);
o.myFunc().apply(o, null);

/* 객체 리터럴 방식 */
const o2 = {
  myFunc: function () {
    console.log("o2 myFunc this:", this);
    return function () {
      console.log("o2 myFunc return this:", this);
    };
  },
};

o2.myFunc().call(o2, null);
o2.myFunc().apply(o2, null);

/* 일반 함수 호출 객체 */
const o3 = {
  name: "hyonie",
};
function myFunc3() {
  console.log("myFunc3:", this);
}

myFunc3(); // window {...}
myFunc3.bind(o3)();
myFunc3.call(o3, null);
