function myFunc(name) {
  this.name = name;
  this.getName = function () {
    console.log("getName this:", this);
    return this.name;
  };

  console.log("myFunc this:", this);
}

const o = new myFunc("elice");
o.getName();
