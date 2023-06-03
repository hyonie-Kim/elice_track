const o = {
  name: "Kim",
  changeMyName: function (name) {
    this.name = name;
  },
};

const o2 = {
  name: "Song",
};

function callFuncWithArg(f, arg) {
  f(arg);
}

// 1번이 Sam인 이유는
// bind 메서드로 기존의 o의 실행컨텍스트를 o2의 컨텍스트로 변환했기 때문이다.
o.changeMyName.bind(o2)("Sam");
console.log("1번 - ", o2.name);

// 2번이 Kim인 이유는,
// o의 changeMyName 메서드의 실행컨텍스트가 callFuncWithArg에서 그대로 유지되기 때문이다.
// o의 changeMyName 메서드는 callFuncWithArg의 인자로 넘겨질 때
// 실행 컨텍스트가 dynamic binding 된다.
// 따라서 o.changeMyName은 global을 실행컨텍스트로 갖게되고, o.name은 바뀌지 않는다.
callFuncWithArg(o.changeMyName, "Daniel");
console.log("2번 - ", o.name);

// 3번이 Sam인 이유는, o.changeMyName 메서드의 실행컨텍스트가 o로 유지되기 때문이다.
o.changeMyName("Sam");
console.log("3번 - ", o.name);
