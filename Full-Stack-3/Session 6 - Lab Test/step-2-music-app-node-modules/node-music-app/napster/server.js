const express = require('express')
const musicFactory = require('./modules/musicFactory')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))


musicFactory.init();
musicFactory.getMusicData();
musicFactory.addFavorite(1);
musicFactory.downloadSong(5);
musicFactory.filterMusic("Hard Rock");
musicFactory.filterMusic("Country Rock");
musicFactory.filterMusic("Hip Hop");
musicFactory.filterMusic("Hard Rock", "Kiss");
musicFactory.filterMusic("", "Jason Aldean");



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/napster.htm'));
})


app.listen(3001, function () {
  console.log('Listening on port 3001!')
})