//// Constants and variables

let musicData = [];
let searchResults = null;
let txtGenre = null;
let txtArtist = null;
let txtSong = null;
let txtAlbum = null;
let _id = 0;

const seedDate = () => {
    musicData.push(new Song("Journey","Don't Stop Believing","3:50","Greatest Hits","5", "Hard Rock"));
    musicData.push(new Song("Def Leppard","Photograph","3:50","Histeria",5, "Hard Rock"));
    musicData.push(new Song("Kiss",	"Lord of Thunder", "5:53","Destroyer",5, "Hard Rock"));
    musicData.push(new Song("Ozzy Osbourne","Crazy Train","4:56","Blizzard of Oz",5, "Hard Rock"));
    musicData.push(new Song("Guns N Roses",	"Paridise City","6:46","Greatest Hits",5, "Hard Rock"));
    musicData.push(new Song("Scorpions","Big City Nights","4:12","Love At First Sting",5, "Hard Rock"));
    musicData.push(new Song("Whitesnake","Still of the Night","6:39","Whitesnake",5, "Hard Rock"));
    musicData.push(new Song("Motley Crue","Too Fast For Love","5:33","Motley Crue",	5, "Hard Rock"));
    musicData.push(new Song("Jason Aldean", "We Back", "4:65", "We Back", 4, "Country Rock"))
    musicData.push(new Song("Hardy", "My Kind of Living", "3:19", "HixTap", 4, "Country Rock"))
    musicData.push(new Song("Jason Aldean", " Tattoos an Tequila", "4:44", "We Back", 4, "Country Rock"))
    musicData.push(new Song("Eric Church", "Springsteen", "3:35", "Chief", 4, "Country Rock"))

    
 
}



class Song {
    constructor(band, title, duration, albulm, rating, genre) {
        _id = _id + 1;
        this.id = _id;
        this.band = band,
        this.title = title;
        this.duration = duration;
        this.albulm = albulm;
        this.rating = rating;
        this.genre = genre;
    }
}

const hasSearchFilters = () => {
    return txtArtist.value || txtSong.value || txtAlbulm.value || txtGenre.value;
}
const doesPropEqualsText = (input, property) => {
    return !input.value || property.toLowerCase().includes(input.value.toLowerCase());
}
const filterMusic = (s) => {
    var result = txtGenre.value === s.genre 
        && doesPropEqualsText(txtArtist, s.band)
        && doesPropEqualsText(txtSong, s.title)
        && doesPropEqualsText(txtAlbulm, s.albulm);
    return result;
}

//// EVENT HANDLERS
const handleSearch = () => {
    console.log('handle search');

    filterAndLoadResults();
}

const handleInputKeyUp = (e) => {
    console.log('handle input key up');
    // Number 13 is the "Enter" key on the keyboard
  if (e.keyCode === 13) {
    // Cancel the default action, if needed
    e.preventDefault();

    filterAndLoadResults();
  }
}

const filterAndLoadResults = () => {

    if(!hasSearchFilters()) {
        alert('Please select a search filter');
        return;
    }
    const results = musicData
        .filter(s => filterMusic(s));

    loadData(results);
}
const handleReset = () => {
    console.log('handle reset');
    txtGenre.value = null;
    txtArtist.value = null;
    txtSong.value = null;
}



const handleSongButtonClick = (e) => {
    if(!e.target) {
        return;
    }

    if(e.target.className === 'btn-favorite')
        alert('favorite button click');
    else if (e.target.className === 'btn-download')
        alert('download button click');

    console.log(e.target.getAttribute("data-key"));
    
}
const setupHandlers = () => {
    getElement('#btnSearch').addEventListener('click', handleSearch);
    getElement('#btnReset').addEventListener('click', handleReset);
    getAllElements('input')
        .forEach(input => 
            input.addEventListener('keyup', handleInputKeyUp));
    getElement('#searchResults').addEventListener('click', handleSongButtonClick);
}


const loadData = (data) => {
    removeTableRows();

    for(const song of data) {
        console.log(song);
        const songRow = buildTableRow(song);
        searchResults.append(songRow);
    }
}

//// DOM Manipulation & Traversal /////
const getElement = (selector) => {
    return document.querySelector(selector);
}
const getAllElements = (selector) => {
    return document.querySelectorAll(selector);
}

const removeTableRows = () => {
    while(searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }
}

const buildTableRow = (songObj) => {
    const row = createElement('tr');
    for(const key in songObj){
        if(key === 'id') continue;
        const colTitle = createElement('td', songObj[key]);
        row.append(colTitle);
    }
 
    createButtonColumn(row, 'Favorite', 'btn-favorite', songObj.id);
    createButtonColumn(row, 'Download', 'btn-download', songObj.id);

    return row;
}

const createButtonColumn = (rowElement, text, className, key) => {
    const buttonCol = createElement('td', null, null, key);
    const btnElement = createElement('button', text, className, key);
    buttonCol.append(btnElement);

     rowElement.append(buttonCol);
}
const createElement = (element, text, className, key) => {
    let elm = document.createElement(element);
    elm.textContent = text;
    if(className)
        elm.className = className;
    if(key)
        elm.dataset.key = key; //setAttribute("data-num", i);

    return elm;
}

const inititalize = () => {
    searchResults = document.querySelector('#searchResults');
    txtGenre = document.querySelector('#txtGenre');
    txtArtist = document.querySelector('#txtArtist');
    txtSong = document.querySelector('#txtSong');
    txtAlbum = document.querySelector('#txtAlbum');
}
/// Window Load
window.onload = () => {
    console.log('window loaded..');
    setupHandlers();
    inititalize();
    seedDate();
    //loadData(musicData);
    console.log(musicData);
}