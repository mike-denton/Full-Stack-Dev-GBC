const events = require('events');

let round = 0;

const eventEmitter = new events.EventEmitter();

eventEmitter.on('ping', (numberOfRounds) => {
  console.log(`Round = ${round + 1}`);
  console.log('ping..');

  setTimeout(() => {
    eventEmitter.emit('pong', numberOfRounds);
  }, 1000);
});

eventEmitter.on('pong', (numberOfRounds) => {
  console.log('pong..');
  round++;
  if (round === numberOfRounds) {
    eventEmitter.removeAllListeners();
    process.exit(0);
  }

  setTimeout(() => {
    eventEmitter.emit('ping', numberOfRounds);
  }, 1000);
});

process.on('exit', () => {
  console.log('game completed..');
});

const playGame = function(numberOfRounds) {
  eventEmitter.emit('ping', numberOfRounds);
}

playGame(3);