// 정규표현식

// 정규표현식 생성
// const regex = new RegExp("Ajax","g");
const regex = /Ajax/g;
const origin = "JavaScript Ajax Java Python";

// 자바스크립트에서 정규식 사용
// RegEXP 객체의 메소드
// 1. exec() : 일치정보를 나타내는 배열 리턴 / 못찾으면 null 리턴
console.log(regex.exec(origin));
console.log(regex.exec("JavaScript"));

// 2. test() : 일칳하면 true / 아니면 false
console.log(regex.test(origin));
console.log(regex.test("JavaScript"));

// 3. match() : string 메서드임
//      RegEXP 객체의 메소드 exec() 메소드와 같은 결과
console.log(origin.match(regex));
console.log("JavaScript".match(regex));

// search() : 찾으면 시작위치 리턴 / 못찾으면 -1 리턴
console.log(origin.search(regex));
console.log("JavaScript".search(regex));

// replace()
console.log(origin.replace(regex, "아작스"));
