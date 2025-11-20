// tab-button 버튼 클릭시 짝꿍 tab-content 보여주기
// + orange 클래스명 이동

// tab-content 찾기 + show 클래스명 이동
const contents = document.querySelectorAll(".tab-content");
// tab-button 버튼 찾기 + click 이벤트 리스너 부착
const btns = document.querySelectorAll(".tab-button");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 어느 tab-button 클릭이 되었는가? e.target
    console.log(btn);
    console.log(contents[idx]);

    // 모든 tab-button orange 제거
    // btns[0].classList.remove("orange");
    // btns[1].classList.remove("orange");
    // btns[2].classList.remove("orange");
    btns.forEach((element) => {
      element.classList.remove("orange");
    });

    // e.target orange 추가
    e.target.classList.add("orange");

    // show 클래스명
    contents.forEach((element) => {
      // 모든 tab-content show 제거
      element.classList.remove("show");
    });

    // contents show 추가
    contents[idx].classList.add("show");
  });
});

// classList.add(), classList.remove(), classList.toggle()
