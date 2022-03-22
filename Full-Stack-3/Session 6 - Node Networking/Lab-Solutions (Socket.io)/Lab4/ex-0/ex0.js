
require('console-stamp')(console, { 
    format: ':date(yyyy/mm/dd HH:MM:ss.l)' 
} );

  console.log(`logger started..`)


var timer = setTimeout(function() {
  console.log(`logger delayed..`)
}, 5000);


timer