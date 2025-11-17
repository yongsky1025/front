// add(a, b) : 더한 결과 리턴 (함수선언방식)
function add(a, b) {
  return a + b;
}
console.log("덧셈 : ", add(5, 6));

// add => add2 함수표현식으로 변경
const add2 = function (a, b) {
  return a + b;
};
console.log("덧셈 : ", add2(4, 2));

// 1 ~ 10까지 더한 결과를 리턴하는 함수 작성(함수 표현식)
const add3 = function () {
  let num = 0;
  let count = 1;
  while (count < 11) {
    num += count;
    count++;
  }
  return num;
};
console.log("1 ~ 10 덧셈 : ", add3());

// 3의 배수 찾기
// multiple(num) : num 3의 배수라면 "박수" 출력 / 아닌경우 "통과"
const multiple = function (num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};
multiple(3);
multiple(4);

// multiple2(num)
// 3의 배수인 경우 박수, 9의 배수인 경우 박수X2, / 아닌경우 "통과"
const multiple2 = function (num) {
  if (num % 3 == 0) {
    console.log("박수");
  }
  if (num % 9 == 0) {
    console.log("박수");
    console.log("박수");
  } else {
    console.log("통과");
  }
};
multiple2(3);
multiple2(7);
multiple2(9);

// 두 과목의 점수를 입력하면 합격 여부를 알려주는 함수
// pass(outline, law)
// 두 과목 합해서 120점 이상이면 합격 출력 / 한 과목이 40점미만 불합격 출력

// function pass(outline, law) {
//   const jumsu = outline + law;

//   if (outline >= 40 && law >= 40 && jumsu >= 120) console.log("합격");
//   else console.log("불합격");
// }
// pass(80, 60);
// pass(40, 90);

const pass = function (a, b) {
  if (a + b > 120) {
    console.log("합격");
  } else if (a < 40 || b < 40) {
    console.log("불합격");
  }
};
pass(80, 60);
pass(40, 90);
