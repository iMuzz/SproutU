$( document ).ready(function() {
  addEndAttributeTime(2);
  playVideoToPercentage(.25); // pass in video percentage

  // $('#bottom').
//   $( window ).resize(function(event) {
//    $("#botttom").width() * .25
//    console.log($("#botttom").width() * .25);
//    // debugger
//     $(".tree_wrapper").attr({
//       style: 'width: '+ $("#botttom").width() * .25 +'px',
//     });
//   });
});


function playVideoToPercentage(percentage) {
    addEndAttributeTime(5 * percentage)    // stop at 4 seconds
    var video = document.getElementById("my-video");
    var starttime = video.currentTime;  // start at 2 seconds
    video.defaultPlaybackRate = .5;

    //handler should be bound first
    video.addEventListener("timeupdate", pauseAtTime);

    video.load();

    video.play(); 
    try {
        video.currentTime = starttime;
    } catch (ex) {
        //handle exceptions here
    }
}

function addEndAttributeTime(value){
  var video = document.getElementById("my-video");
  $(video).attr('data-end-time', value);
};

function getEndTime(){
	var video = document.getElementById("my-video");
	return parseFloat($(video).attr('data-end-time'));	
};

function pauseAtTime(){
  var video = document.getElementById("my-video");
  var endtime = getEndTime();

  if (video.currentTime >= endtime) {
      video.pause();
  }
};

