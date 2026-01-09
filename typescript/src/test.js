function add(num1, num2) {
  console.log(num1 + num2);
}

add(); // NaN
add(1); // NaN
add(1, 2);
add(3, 4, 5);
add("hello", "world"); // helloworld

function showItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3, 4, 5]);
showItems(1, 2, 3, 4, 5);

// 자바스크립트 동적언어 : 런타임에 타입 결정 => 실행 시 오류 발생
// java, typescript : 컴파일에 타입 결정 => 컴파일 시 오류 발생
