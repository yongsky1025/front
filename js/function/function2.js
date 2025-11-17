// 함수 표현식

const showMsg = function () {
  console.log("안녕하세요");
};

showMsg();

const multiply = function (a, b) {
  console.log(a, b);
  return a * b;
};
const result = multiply(5, 3);
console.log(result);

const showDialog = function (greeting, name) {
  console.log(`${greeting}!! ${name}`);
};
showDialog("hello", "kim");

const showDialog2 = function a(greeting, name) {
  // a();는 내부에서만 사용 가능
  console.log(`${greeting}!! ${name}`);
};
showDialog("hello", "kim");

// ---- function () vs s함수표현식

// 함수 선언하기 전 호출 : hoisting
console.log(multiply2(6, 8));

function multiply2(x, y) {
  return x * y;
}

// var 변수 : hoisting
console.log(z);
var z = 5;

// 함수표현식은 hoisting 안됨
console.log(multiply3(8, 9)); //ReferenceError: Cannot access 'multiply3' before initialization
const multiply3 = function () {
  return x * y;
};

console.log(k);
let k = 6;
