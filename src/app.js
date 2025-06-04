import "bootstrap";
import "./style.css";

window.onload = function () {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let whoRandom = who[randomNumber(who)];
  let actionRandom = action[randomNumber(action)];
  let whatRandom = what[randomNumber(what)];
  let whenRandom = when[randomNumber(when)];

  let textHtml = whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;

  const excuse = document.querySelector("#excuse");
  excuse.innerHTML = textHtml;
};

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
};
