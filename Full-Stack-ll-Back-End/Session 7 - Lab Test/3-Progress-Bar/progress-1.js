
const progressBar = require('progress');

var downloadBar = new progressBar(':bar', { total: 10 });

const handleDownload = () => {
  downloadBar.tick();

  if (downloadBar.complete) {
    console.log(`Downloaded --> Completed.`)
    clearInterval(timer);
  }
}
var timer = setInterval(handleDownload, 500);


const startProgress = () => {
    console.log(`Downloaded --> Started.`)
    return timer;
}

module.exports = {
    startProgress: startProgress
}