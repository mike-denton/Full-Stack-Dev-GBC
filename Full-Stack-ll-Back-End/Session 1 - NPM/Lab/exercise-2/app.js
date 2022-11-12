const say = require('say')
 
// Use default system voice and speed
say.speak('Hello!')
 
// Stop the text currently being spoken
say.stop()
 
// More complex example (with an OS X voice) and slow speed
say.speak("Hello?", 'Alex', 0.5)

const sorryDave = () => {
    say.speak("Here is a star wars spoiler, darth vader is lukes father.", 'Cellos', 0.5);
}

setTimeout(sorryDave, 500);




