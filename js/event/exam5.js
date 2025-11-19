// form submit 발생 시

document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault();

  const form = e.target;

  // 검증
  // 내용이 잘 입력되어 있는지 확인
  // 입력안된 요소에 포커스 주고 메세지 alert 띄우기
  if (form.name.value === "") {
    alert("이름을 입력해 주세요.");
    form.name.focus();
  } else if (form.password.value === "") {
    alert("비밀번호를 입력해 주세요.");
    form.password.focus();
  } else if (form.age.value === "") {
    alert("나이를 입력해 주세요.");
    form.age.focus();
  } else {
    e.target.submit();
  }

  // 내용이 들어있다면 원래대로 submit 실행
  //
});
