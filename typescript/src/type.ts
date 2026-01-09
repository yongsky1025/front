export {};

// javascript 타입 : number, string, boolean, [], undefined, null
// let car = "BMW"; // string 유추
let car: string = "BMW";
// car = 3;

let age: number = 30;
// age = "45";
// age = true;

let isAdult: boolean;
isAdult = true;
// isAdult = "true"

let n: null = null;
// n = undefined;

let u: undefined;
u = undefined;
// u = "123";

let fruits: string[] = ["apple", "banana", "cherry"];
// fruits = "mellon";
let fruits2: Array<string> = ["apple", "banana", "cherry"];

// fruits.push(1); // string배열이라 number 불가

let score1: number[] = [90, 85, 88];
let score2: Array<number> = [90, 85, 88];

// string + number
let mixed: (string | number)[] = ["apple", 45, "banana", 46, 78];

//읽기 전용 배열
const vegetables: readonly string[] = ["carrot", "broccoli", "spinach"];
// vegetables.push() // 수정불가

const newArray = [...vegetables, "potato"];
console.log(newArray);

// 타임스크립트 제공 : 튜플, any, unknown, void, never, enum
// 튜플 : 순서, 길이 고정
let person: [string, number];
// person = [25, "Alice"];
person = ["Alice", 25];
console.log(person[0].toLowerCase());
// console.log(person[1].toLowerCase()); //number라서 사용 불가

function getUserInfo(): [string, number, boolean] {
  // 이름, 나이, 성인여부 리턴
  return ["Bob", 30, true];
}

// console.log(getUserInfo());
const [name1, age1, adult] = getUserInfo();
console.log(`name : ${name1}, age : ${age1}, isAudlt : ${adult}`);

console.log("배열과 튜플의 비교");
const inferredArray = [1, "two"];
const inferredTuple = [1, "two"] as const; // read-only

inferredArray.push("three");
inferredArray.push("four");
inferredArray.push("4");
console.log(inferredArray);

// inferredTuple[0] = 2; // 값 변경 불가
const explicitTuple: [number, string] = [1, "two"];
explicitTuple[0] = 2;
explicitTuple[1] = "three";
console.log(explicitTuple);

// any == 기존 자바스크립트 변수 선언 개념과 동일(typescript 에서는 잘 사용 안함)
let num; // 추론할 수 없음
num = 95;
num = "Five";

let randomValue: any = 10;
randomValue = "Hello";
console.log(randomValue.length);
randomValue = true;

// unknown : 모르는 것에 대해서는 일단 금지 / type check 후 안전하게 사용
let unknownValue: unknown = 10;
unknownValue = "Hello";
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log("문자길이 ", strLength);
}

if (typeof unknownValue === "string") {
  console.log(unknownValue.toLowerCase());
  //   unknownValue.toFixed()
}
unknownValue = false;

// as : 타입단언 or <타입>변수명
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length;

// void : 반환값에 사용
function logMsg(message: string): void {
  console.log(`${message}`);
}
logMsg("log messages");

// 전달인자가 string or null, 반환값 없음
function printLength(text: string | null): void {
  // text? : text 는 널일 수 있음
  //   console.log(`text length ${text?.length}`);

  if (text === null) {
    console.log("No text");
    return;
  }
  console.log(`text length ${text.length}`);
}

printLength("Hello! TypeScript");
printLength(null);

// never : 에러를 반환하거나 절대 종료되지 않는 함수의 타입으로 사용
function error(message: string): never {
  throw new Error(message);
}
// error("이것은 에러입니다.");
let doc: string = "문서"; // Unreachable code detected.
// let neverValue: never = 10;

let i = 0;
function infiniteLoop(): never {
  while (true) {
    i++;
  }
}
// infiniteLoop();

function handleValue(x: string | number | boolean | object): void {
  if (typeof x === "string") {
    console.log("String value : " + x);
  } else if (typeof x === "number") {
    console.log("Number value : " + x);
  } else if (typeof x === "boolean") {
    console.log("Boolean value : " + x);
  } else if (typeof x === "object") {
    console.log("Object value : " + x); // 만일 추가해야 할 자료형이 빠졌을 경우 에러
  } else {
    const Unreachable: never = x;
    throw new Error("Unhandled type : " + Unreachable);
  }
}
handleValue("hello");
handleValue(25);
handleValue(true);

// enum == 상수 모임
enum Color {
  red,
  Blue,
  Green,
}

console.log(Color.Blue);
console.log(Color["Blue"]);

let myColor: Color;
myColor = Color.Green;
// myColor = "Red";
// myColor = Color.Yellow;

// type
type Addr = string | number;
let userAddr: Addr;
userAddr = "서울시 34-5";

// type === enum
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

// let person:[string, number];
// const inferredTuple = [1, "two"] as const;
type PointTuple = [number, number];
let point: PointTuple = [10, 25];
// point = [10, 20, 30];
// point = [10, "20"];

// & : 교차타입
type Name = {
  firstName: string;
  lastName: string;
};

type Employee = Name & {
  employeeId: number;
};

let employee: Employee;
employee = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 1234,
};

// Member 의 property 가 정해지지 않은 경우
type Member = {
  [key: string]: string;
};

let member: Member = {
  id: "user01",
};

member = {
  id: "user02",
  name: "홍길동",
};
