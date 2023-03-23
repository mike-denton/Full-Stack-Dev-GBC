
const progressBar = require('progress');
const chalk = require('chalk');

var downloadBar = new progressBar('Downloading [:bar]  :percent :etas', {
    complete: chalk.green.bgGreen(' '),
    incomplete: chalk.black.bgBlack(' '),
    width: 20,
    total: 100
});

var timer = setInterval(function () {
    downloadBar.tick();
  if (downloadBar.complete) {
    console.log(chalk.greenBright.bgBlack(`Downloaded --> Completed.`));
    clearInterval(timer);
  }
}, 500);


const startProgress = () => {
    console.log(chalk.greenBright.bgBlack(`Downloaded --> Started.`));
    return timer;
}
module.exports = {
    startProgress: startProgress
}