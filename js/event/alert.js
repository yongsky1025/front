// 알림창 보여주기 클릭 시 알림창 보여주기
const btn = document.querySelector("button");
const box = document.querySelector(".alert-box");
// const xbtn = document.querySelector(".close");

// btn.addEventListener("click", () => {
//   box.style.display = "block";
// });

// xbtn.addEventListener("click", () => {
//   box.style.display = "none";
// });

const notification = (state) => {
  box.style.display = state;
};
// 알림창 보여주기 클릭 시 알림창 보여주기
document.querySelector("button").addEventListener("click", () => {
  notification("block");
});
// x클릭시 창 닫기
// display = "none";
document.querySelector(".close").addEventListener("click", () => {
  notification("none");
});
