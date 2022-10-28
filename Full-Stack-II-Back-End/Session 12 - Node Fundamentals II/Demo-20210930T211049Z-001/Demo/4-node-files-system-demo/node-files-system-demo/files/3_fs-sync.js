
var fs = require('fs');

// delete file and directory, if it exists
if(fs.existsSync('temp')) {
    console.log('Directory exists, removing...');
    if(fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt'); 
        console.log('remove text file')
    }
    fs.rmdirSync('temp');
}

// create the directory
fs.mkdirSync('temp');
// check directory exists

if(fs.existsSync('temp')) {
    // change the current working directory
    process.chdir('temp');
    // write text to the file
    fs.writeFileSync('test.txt', 'this is a test');
    // rename the file
    fs.renameSync('test.txt', 'new.txt');
    console.log('File has size', fs.statSync('new.txt').size);
    console.log('File contents: ' + fs.readFileSync('new.txt').toString()); // reading from buffer => to string convert
}

