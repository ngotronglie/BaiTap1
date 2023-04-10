const slideList = document.getElementsByClassName("slide");
console.log(slideList);
let currentIndex = 0;
slideList[currentIndex].style.display = "block";

function preview() {
  slideList[currentIndex].style.display = "none";
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideList.length - 1;
  }
  slideList[currentIndex].style.display = "block";
}
function next() {
  slideList[currentIndex].style.display = "none";
  currentIndex++;
  if (currentIndex > slideList.length - 1) {
    currentIndex = 0;
  }
  slideList[currentIndex].style.display = "block";
}

var mySlideShow = setInterval(next, 3000);

var playing = true;
const pauseElement = document.getElementById("pause");

function pauseSlideShow() {
  pauseElement.innerText = "play";
  playing = false;
  clearInterval(mySlideShow);
}
function playSlideShow() {
  pauseElement.innerText = "pause";
  playing = true;
  mySlideShow = setInterval(next, 3000);
}

pauseElement.onclick = function () {
  if (playing) {
    pauseSlideShow(0);
  } else {
    playSlideShow();
  }
};
