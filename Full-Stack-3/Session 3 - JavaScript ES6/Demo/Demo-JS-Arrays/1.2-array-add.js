

let dailyActivities = ['eat', 'sleep', 'sleep'];

var occurrencesNum = function() {

        var result = [];

        for(var i=0; i < dailyActivities.length; i++) {
            var currentItem = dailyActivities[i];
            if(currentItem === 'sleep') {
                result.push(currentItem);
            }
        }

        console.log('number of occurrences..' + result.length) // [sleep, sleep, sleep]
 
}

occurrencesNum();



// add an element at the end of the array
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']


//add an element at the end of the array
dailyActivities.pop()

console.log(dailyActivities); // ['work', 'eat', 'sleep', 'exercise'']
