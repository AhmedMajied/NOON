/*
*******************************
            Amr Saeed
     Live stream video script
*******************************
*/

/* Live stream controls objects */

var video = $('#ivideo-lst');
var playButton = $('#ibutton-play');
var timeSlider = $('#iinput-time-slider');
var currentTime = $('#ispan-current-time');
var volumeButton = $('#ibutton-mute');
var volumeSlider = $('#iinput-volume-slider');
var fullScreenButton = $('#ibutton-full-screen');

/* Play/pause video when clicking on it */

video.on("click", function(){
  if(video[0].paused){
    video[0].play();
    playButton.css("display", "none");
  } else {
    video[0].pause();
    playButton.css("display", "block");
  }
});

/* Play video when clicking on play button */

playButton.on("click", function (){
  video[0].play();
  playButton.css("display", "none");
});

/* Changing video current time when changing time slider */

timeSlider.on("change", function(){
  video[0].currentTime = video[0].duration * (timeSlider.val() / 100);
});

/* Updating time slider, current time, and progress bar while video is running */

video.on("timeupdate", function(){
  updateTimeSlider();
  updateCurrentTime();
  updateProgressBar();
});

function updateTimeSlider(){
  timeSlider.val((video[0].currentTime /  video[0].duration) * 100);
}

function updateCurrentTime(){
  var minutes = Math.floor(video[0].currentTime / 60);
  var seconds = Math.floor(video[0].currentTime - minutes * 60);
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  currentTime.text(minutes + ":" + seconds);
  currentTime.css("margin-left", $('#idiv-time-prog-bar').css('width'));
}

function updateProgressBar(){
  $('#idiv-time-prog-bar').css('width', timeSlider.val() +'%');
}

/* Updating buffer bar */

var startBuffer = function() {
    var maxduration = video[0].duration;
    var currentBuffer = video[0].buffered.end(0);
    var percentage = (currentBuffer / maxduration) * 100;

    $('#idiv-time-buf-bar').css('width', percentage + '%');

    if(currentBuffer < maxduration) {
        setTimeout(startBuffer, 500);
    }
};

setTimeout(startBuffer, 500);

/* Mute/unmute volume when clicking on volume button */

volumeButton.on("click", function(){
  if(video[0].muted){
    video[0].muted = false;
    volumeSlider.val(100);
    $('#idiv-volume-prog-bar').css('width', 100 + '%');
  } else {
    video[0].muted = true;
    volumeSlider.val(0);
    $('#idiv-volume-prog-bar').css('width', 0 + '%');
  }
});

/* Updating video volume and volume bar when changing volume slider */

volumeSlider.on("change", function(){
  video[0].volume = volumeSlider.val() / 100;
  $('#idiv-volume-prog-bar').css('width', video[0].volume * 100 + '%');
});

/* Full screen mode */

fullScreenButton.on("click", function (){
  if(video[0].requestFullScreen){
    video[0].requestFullScreen();
  } else if(video[0].webkitRequestFullScreen){
    video[0].webkitRequestFullScreen();
  } else if(video[0].mozRequestFullScreen){
    video[0].mozRequestFullScreen();
  }
});

/* Show current time when hover on time slider */

timeSlider.hover( function(){
  currentTime.css("display", "inline");
}, function(){
  currentTime.css("display", "none")
});
