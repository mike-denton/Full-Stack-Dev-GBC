
const progressBar = require('progress');

var downloadBar = new progressBar(':bar', { total: 10 });

var timer = setInterval(function () {
    downloadBar.tick();
  if (downloadBar.complete) {
    console.log(`Downloaded --> Completed.`)
    clearInterval(timer);
  }
}, 500);


const startProgress = () => {
    console.log(`Downloaded --> Started.`)
    return timer;
}
module.exports = {
    startProgress: startProgress
}