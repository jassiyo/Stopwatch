
// By default should start from zero
var hr = 0;
var mints = 0;
var sec = 0;
var count = 0;

// boolen values is false for standby, it will turn TRUE when we click on start button
var timer = false;

// Function to start the timer
function start() {
  timer = true;
  stopWatch();
};

// fucntion to stop the timer
function stop() {
  timer = false;
};

// function to Reset the timer
function reset() {
  timer = false;

  // By clicking on Reset button, false value should return to "00"    
  hr = 0;
  mints = 0;
  sec = 0;
  count = 0;


  document.getElementById("hr").innerHTML = "00";
  document.getElementById("mints").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

// Main function to Run the stopwatch
function stopWatch() {
// When timer hit the true it start 
  if (timer == true) {
    count = count + 1;
    // when milesecond count hit 99, then its get "00" and second got "01"
    if (count == 99) {
      sec = sec + 1;
      count = 0;
    }

    // When second hit 60sec it turend '00' and mints got '01'
    if (sec == 60) {
      mints = mints + 1;
      sec = 0;
    // When mints hit 60mints it turend '00' and hours got '01'
      if (mints == 60) {
        hr = hr + 1;
        mints = 0;
        sec = 0;
      }
    }

    // When timer hit single digit '1' it should reflect like '01'

    var hrString = hr;
    var mintsString = mints;
    var secString = sec;
    var countString = count;

    // Here "0" is concatinating when digit hit single number '1'
    // Its help to reflect like "01"
    // Same with mints secs and mileseconds
    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (mints < 10) {
      mintsString = "0" + mintsString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("sec").innerHTML = secString;
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("mints").innerHTML = mintsString;
    document.getElementById("count").innerHTML = countString;

    setTimeout("stopWatch()", 10);
  }
}
