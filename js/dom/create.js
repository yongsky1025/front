// 생성 클릭 시 동적으로 element(node) 생성
// <p>HELLO</p>

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const pTag = "<p>HELLO</p>";

  //   insertAdjacentHTML("위치", 삽입요소)
  //   <div id="test"><p>HELLO</p>TEST</div>
  //   document.querySelector("#test").insertAdjacentHTML("afterbegin", pTag);

  //   <div id="test">TEST</div><p>HELLO</p>
  //   document.querySelector("#test").insertAdjacentHTML("afterend", pTag);

  //   <p>HELLO</p><div id="test">TEST</div>
  //   document.querySelector("#test").insertAdjacentHTML("beforebegin", pTag);

  //   <div id="test">TEST<p>HELLO</p></div>
  document.querySelector("#test").insertAdjacentHTML("beforeend", pTag);

  //   document.body.append(pTag);

  const img = document.createElement("img");
  img.src = "./1.jpg";
  img.alt = "시계";
  document.body.appendChild(img);
});
