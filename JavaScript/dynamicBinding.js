let o = {
  name: "Daniel",
  f1: () => {
    console.log("[f1] this : ", this);
  },

  f2: function () {
    console.log("[f2] this : ", this);
  },
  printName: function () {
    console.log("내 이름은 ", this.name);
  },
};

o.f1(); // global
o.f2(); // o
o.printName(); // 내 이름은 Daniel

setTimeout(o.f1, 10);
setTimeout(o.f2, 20);

/*
 printName 메서드는 bind 함수를 이용해 this 변수가 
 o를 가리키도록 컨텍스트를 동적 바인딩한다.
*/
setTimeout(o.printName, 10); // 내 이름은 undefined
setTimeout(o.printName.bind(o), 20); // 내 이름은 Daniel
