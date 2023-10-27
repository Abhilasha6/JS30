const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progres_filled');
const toggle = player.querySelector('.toggle');
const range = player.querySelectorAll('.player_slider');
const skipButtons = player.querySelectorAll('[data-skip]');

// play video either on clicking play button or on video
function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

//update the play/pause button depending on whether video is playing
function updateButton(){
    console.log('button update');
    const icon=this.paused ? '▶️':'⏸️';
    toggle.textContent=icon;
}

// skip the clicked no. of seconds
function skip()
{
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

//handle range change for volume and playback speed
function handleRangeUpdate(){
  video[this.name]=this.value;
  console.log(this.value);
  console.log(this.name);
}

//progress bar of video
// function handleProgress(){
//   const progresspercent = (video.currentTime/video.duration) * 100;
//   progressBar.style.flexBasis = `${progresspercent}%`;
// }
// //play the video from where it was clicked
// function scrub(e){
//   const scrubtime = (e.offsetX/progress.offsetWidth)*video.duration;
//   video.duration=scrubtime;
// console.log(e);
// }
//drag the progress bar & change the video content accordingly
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}



video.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

range.forEach(range => range.addEventListener('change', handleRangeUpdate));
range.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);