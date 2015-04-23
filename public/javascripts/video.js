$( document ).ready(function() {
  // addEndAttributeTime(2);
  // playVideoToPercentage(.15); // pass in video percentage
  startCount();
  decreaseBalance();

  var video = new VideoWrap({id: "my-video", playbackRate: .5});
  video.resumeToPercentage(.15);

});

function VideoWrap (object) {

    this.video = document.getElementById(object["id"]);

    this.endTime = object["endTime"] || 1;  //default percentage video should play to. 
    
    this.startTime = object["startTime"] || 0 ;

    this.video.playbackRate = object["playbackRate"] || 1;

    // play
    this.play = function () {
      this.video.play();
    };

    // pause now
    this.pause = function () {
      this.video.pause ();
    };

    this.resumeToPercentage = function(percentage){  
      var startTime = this.video.currentTime;                         //set video start time to current start time
      $(this.video).attr('data-end-time', (this.video.duration * percentage));          //set where the video should end    
      this.video.addEventListener("timeupdate", this.pauseAtTime);    //make video stop at certain time

      this.video.play();

      try {
        video.currentTime = starttime;
      } catch (ex) {}
    };

    // pause at time
    this.pauseAtTime = function pauseAtATime() {
      var endTime = $(this).attr('data-end-time');             // get video end time
      
      if (this.currentTime >= endTime) {                        // stop video and remove listener when video reaches end time
        this.pause();
        this.removeEventListener("timeupdate", pauseAtATime);
      };
    };

    this.getEndTime = function() {
      var video = this.video;
      return parseFloat($(video).attr('data-end-time'));
    };
    
    this.init = function() {
      // This gets run everytime a new object is created.
    };
    this.init();

    this.rewind = function() {
      var video = this.video;
      var currTime = this.video.currentTime * 100 | 0;
      function frame() {
        currTime-=5;
        video.currentTime = currTime / 100;
        console.log(video.currentTime)

        if (currTime <= 0)  // check finish condition
          clearInterval(id)
      };

      var id = setInterval(frame, 50) // draw every 50ms
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

function rewind() {
  var left = 0
 
  function frame() {
    left++  // update parameters
    console.log(left)

    if (left == 100)  // check finish condition
      clearInterval(id)
  }
  var id = setInterval(frame, 25) // draw every 10ms
}