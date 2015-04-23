$( document ).ready(function() {
  addEndAttributeTime(2);
  playVideoToPercentage(.15); // pass in video percentage
  startCount();
  decreaseBalance();


  var video = new VideoPlayer({id: "my-video"});
});

function VideoPlayer (object) {

    this.init = function() {
      // This gets run everytime a new object is created.
    };
    this.init();


    this.video = document.getElementById(object["id"]);

    this.endTime = object["endTime"] || 1;  //default percentage video should play to. 
    
    this.startTime = object["startTime"] || 0 ;

    this.playbackRate = object["playbackRate"] || 1;

    // play

    // pause now

    // pause at time

    // start


    this.resumeToPercentage = function(percentage){  //this could accept object to change playback rate
      var startTime = this.video.currentTime;                         //set video start time to current start time
      $(video).attr('data-end-time', (5 * percentage));               //set where the video should end    
      this.video.addEventListener("timeupdate", this.pauseAtTime);    //make video stop at certain time

      // this.video.load();

      this.video.play();

      try {
        video.currentTime = starttime;
      } catch (ex) {
          //handle exceptions here
      }
    };

    this.pauseAtTime = function pauseAtATime() {
      var endTime = $(video).attr('data-end-time');             // get video end time
      
      if (this.currentTime >= endTime) {                        // stop video and remove listener when video reaches end time
        this.pause();
        this.removeEventListener("timeupdate", pauseAtATime);
      };
    };

    this.getEndTime = function() {
      var video = this.video;
      return parseFloat($(video).attr('data-end-time'));
    };
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

function pauseAtTime(){
  var video = document.getElementById("my-video");
  var endtime = getEndTime();

  if (video.currentTime >= endtime) {
      video.pause();
      video.removeEventListener("timeupdate", pauseAtTime);
  }
};

function addEndAttributeTime(value){
  var video = document.getElementById("my-video");
  $(video).attr('data-end-time', value);
};

function getEndTime(){
  var video = document.getElementById("my-video");
  return parseFloat($(video).attr('data-end-time'));  
};


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


