var fs = require('fs');

// clean up => script...
if(fs.existsSync('temp')) {
    console.log('Directory exists, removing...');
    if(fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

var dirName = 'temp';
var testFile = 'test.txt';
var newFile = 'new.txt';

fs.mkdir(dirName, (err) => {
    fs.exists(dirName, (exists) => {
        if(exists) {
            process.chdir(__dirName);
            fs.writeFile(testFile, 'this is a test', (err) => {
                fs.rename(testFile, newFile, (err) => {
                    fs.stat(newFile, (err, stats) => {
                        console.log('File has size:' + stats.size + 'bytes');
                        fs.readFile(newFile, (err, data) => {
                            console.log('File contents: ' + data.toString());
                        })
                    })
                })
            })
        }
    })
})

