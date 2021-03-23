var video = document.getElementById("myVideo");

function myFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
myFunction();