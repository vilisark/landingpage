var video = document.getElementById("bg_video");

function myFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
myFunction();