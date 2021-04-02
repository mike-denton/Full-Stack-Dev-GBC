const express = require('express')
const musicFactory = require('./modules/musicFactory')
const path = require('path')
var bodyParser = require('body-parser')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

musicFactory.init();




app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/napster.htm'));
})

app.get('/musicData', function(req, res) {
    const data = musicFactory.getMusicData();
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  })
  app.get('/filterMusic', function(req, res) {
    const queryStr = req.query;
    console.log(queryStr)
    const data = musicFactory.filterMusic(queryStr.genre, queryStr.band, queryStr.title, queryStr.albulm)
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  })

  app.get('/favorite', (req, res) => {
    const queryStr = req.query;
    console.log(queryStr)
    const song = musicFactory.addFavorite(queryStr.id);
    res.status(200);
    res.send(JSON.stringify(song));
  })

  app.post('/download', (req, res) => {
    const params = req.body;
    console.log(params);
    musicFactory.downloadSong(params.id);
    res.status(200);
    res.send(`Downloaded song with id: ${params.id}`);
  })

app.listen(3004, function () {
  console.log('Listening on port 3004!')
})