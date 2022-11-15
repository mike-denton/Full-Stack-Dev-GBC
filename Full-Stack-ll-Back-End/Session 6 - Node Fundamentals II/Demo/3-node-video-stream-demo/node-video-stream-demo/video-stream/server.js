const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

// express => static middleware => public
app.use(express.static(path.join(__dirname, 'public')))

// express => routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.htm'))
})

app.get('/video', function(req, res) {
  const path = 'assets/sample.mp4'
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1

    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }

    res.writeHead(206, head)
    file.pipe(res)
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})




    // subscribe to the on event and handle the incoming chunks of request data
    // file.on('data', function (chunk) {
    //   console.log('>>> Data >>> ' + chunk);
    // });

    // subscribe to the on 'end' event to handle when the request ends.
    // file.on('end', function() {
    //   console.log('***** Done! ******')
    // })
