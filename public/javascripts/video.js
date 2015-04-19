$( document ).ready(function() {
  addEndAttributeTime(2);
  playVideoToPercentage(.25); // pass in video percentage
  startCount();
  decreaseBalance();23895
});
function decreaseBalance(){
    var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };

  var loan = new countUp("loan-balance", 23896, 19852, 0, 7, options);
  loan.start();
};

function startCount(end_score, end_change){
  var end_score = end_score || 649;
  var end_change = end_change || 12;
  // 4.09
  // 1.47

  // = 2.62
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };

  var curr_score = $('#cscore').text();
  var csinc = $('#csinc').text();
  var cred_score = new countUp("cscore", curr_score, end_score, 0, 7, options);
  var cred_change = new countUp("csinc", csinc, end_change, 0, 7, options);
  cred_score.start();
  cred_change.start();
};

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

