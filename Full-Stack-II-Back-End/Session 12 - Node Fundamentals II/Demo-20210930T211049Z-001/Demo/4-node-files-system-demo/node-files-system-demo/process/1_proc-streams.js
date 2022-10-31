//http://nodejs.org/api/process.html#process_process_stdin

// process does not need to be required, it available by default to node.js

// process, starts on paused, we must resume() it
process.stdin.resume(); 
process.stdin.setEncoding('utf8'); 

// listen for data on stdin
process.stdin.on('data', (chunk) => {
    process.stdout.write(`Data! -> ${chunk}`);
});

// when stdin stream is closed, output on stderr
process.stdin.on('end', () => {
    process.stderror.write('End!\n');
});