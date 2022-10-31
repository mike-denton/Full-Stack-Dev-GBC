var count = 10;

var timer = setInterval(function() {
  console.log(count);
  count--;
  // comment this out, interval will never stop
  if(count < 1) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}

timer;