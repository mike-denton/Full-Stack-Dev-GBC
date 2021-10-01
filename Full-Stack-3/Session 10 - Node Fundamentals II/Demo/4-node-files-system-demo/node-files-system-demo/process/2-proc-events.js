//Watchers for other signals can be successfully created, but these signals
//* are never generated. These signals are: SIGILL, SIGABRT, SIGFPE, SIGSEGV,
//* SIGTERM and SIGKILL.

//
setInterval(function() {
  console.log("interval");
}, 500000);

// SIGINT is normally delivered when the user presses CTRL+C.
process.on("SIGINT", function() {
  process.exit(0);
});

// watcher for resizing console event
process.on("SIG", function() {
  process.stdout.write(" *** RESIZING ***\n");
});

// watcher for process exiting event
process.on("exit", function() {
  process.stdout.write(" *** EXITING ***\n");
});

// display the process id for current running process
console.log(`Node is running as process #: ${process.pid}`);
