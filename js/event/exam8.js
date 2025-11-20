// 이벤트 버블링
// li 클릭 시 부모한테 전달되는 부분 이용
const parent = document.querySelector(".container");

// tab-content 찾기 + show 클래스명 이동
const contents = document.querySelectorAll(".tab-content");

// tab-button 버튼 찾기 + click 이벤트 리스너 부착
const btns = document.querySelectorAll(".tab-button");

parent.addEventListener("click", (e) => {
  // 어느 tab-button 클릭이 되었는가? e.target
  btns.forEach((element) => {
    element.classList.remove("orange");
  });
  // e.target orange 추가
  e.target.classList.add("orange");

  // 모든 tab-content show 제거
  contents.forEach((content) => {
    content.classList.remove("show");
  });
  // show 클래스명
  // contents show 추가
  contents[e.target.dataset.idx].classList.add("show");
});
