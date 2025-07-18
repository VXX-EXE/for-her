"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "احبك ولو وجودك ذنب قلبي معك ماتاب انا عبد يخاف الله ولكنك اجمل اذنوبه عليك من الوله شيئ تعدا غلى الاصحاب يخلي الفارس الليله من الغلا يضيع دروبه اشوف البدر وجهك وصدرك كنه المحراب معك متمسك بيديني ومجدد عقبها التوبه ولو تجعل قلبي في جلسه استجواب جواب السوال الي تقوله تراه يحب محبوبه بنهايه حديثي معك بقول لك وعد مني بتكونين الاولى الي تعلمت معها الحب الحقيقي والاخير التي لن ياتي بعد احد الوحيده التي ستسكن زوايا قلبي بلا نزاع ولا منازع ستكونين الحضور الدائم في حياتي والظل الذي لايفارقني اعدك بانك ستكونين الحلم الذي لا يتبدل والامان الذي الوذ اليه كلما ضاقت الدنيا علي احبك ياا جنان .";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "لا",
    "متاكده؟",
    "تكفين؟",
    "لا تسوين بخاطري كذا!",
    "كسرتي خاطري.",
    "بفقدك.",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
