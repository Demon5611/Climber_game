//
const climber = document.querySelector(".climber");

const divs = [
  document.querySelector(".line1"),
  document.querySelector("#two"),
  document.querySelector("#three"),
  document.querySelector("#four"),
  document.querySelector("#five"),
  document.querySelector("#six"),
];

let i = 0;
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyZ") {
    divs[i].appendChild(climber);
    i += 1;
    divs[i - 1].style.cssText = "color: red;border: 2px solid gold";

    if (divs[i] == divs[5]) {
      let elem0 = document.querySelector("#five");
      let win0 = document.createElement("span");
      win0.className = "Winer";
      win0.innerText = "Еще_поднажми!";
      win0.style.cssText = `
      color: green;
      font-size: 14px;`;
      elem0.append(win0);
    }

    if (divs[i] == divs[6]) {
      let elem = document.querySelector("#six");
      let win = document.createElement("span");
      win.className = "Winer";
      win.innerText = "WINER!!!";
      win.style.cssText = `
      color: red;
      font-size: 24px;`;
      elem.append(win);
    }
  }
});
let j = 1;
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyX") {
    divs[j].appendChild(climber);
    j -= 1;
  }
});
