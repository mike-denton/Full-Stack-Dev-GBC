//// Constants and variables


let favoriteData = [];
let searchResultsContainer = null;
let favoriteListContainer = null;
let txtGenre = null;
let txtArtist = null;
let txtSong = null;
let txtAlbum = null;





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


const handleFavoriteClick = (id) => {
    const song = musicData.filter(x => x.id == id);
    if(!song) {
        console.warn(`song ${id} not found, cannot add to favorties`);
        return;
    }
    favoriteData.push(song);
    createFavoriteImage(song);
    console.log(favoriteData)
}

const handleRemoveFavoriteClick = (e) => {
    if(!e.target) {
        return;
    }
    favoriteListContainer.removeChild(e.target);
}
const handleSongButtonClick = (e) => {
    if(!e.target) {
        return;
    }

    if(e.target.className === 'btn-favorite') {
        console.log('favorite button click');
        handleFavoriteClick(e.target.getAttribute("data-key"));
    }
    else if (e.target.className === 'btn-download')
        alert('download button click');

    console.log(e.target.getAttribute("data-key"));
    
}
const setupHandlers = () => {
    getElement('#btnSearch').addEventListener('click', handleSearch);
    getElement('#btnReset').addEventListener('click', handleReset);
    getAllElements('input')
                .forEach(input => input.addEventListener('keyup', handleInputKeyUp));

    getElement('#searchResults').addEventListener('click', handleSongButtonClick);
    getElement('#favoriteListContainer').addEventListener('click', handleRemoveFavoriteClick);
}


const loadData = (data) => {
    removeTableRows();

    for(const song of data) {
        console.log(song);
        const songRow = buildTableRow(song);
        searchResultsContainer.append(songRow);
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
    while(searchResultsContainer.firstChild) {
        searchResultsContainer.removeChild(searchResultsContainer.firstChild);
    }
}

const buildTableRow = (songObj) => {
    const row = createElement('tr');
    for(const key in songObj){
        if(key === 'id' || key === 'imageName') continue;
        const colTitle = createElement('td', songObj[key]);
        row.append(colTitle);
    }
    const liFaDownload = createElement('li', null, "fas fa-download");
    createButtonColumn(row, null, 'btn-favorite', songObj.id, liFaDownload);
    createButtonColumn(row, 'Download', 'btn-download', songObj.id, liFaDownload);

    return row;
}


const createFavoriteImage = (song) => {

    const imageName = song[0].imageName;
    const imgFilePath = `images\\${imageName}`;
    const imgElement = createElement('img', null, 'favorite-albulm-item');
    imgElement.src = imgFilePath;
    favoriteListContainer.append(imgElement);

}

const createButtonColumn = (rowElement, text, className, key, innerHtml) => {
    const buttonCol = createElement('td', null, null, key);
    const btnElement = createElement('button', text, className, key, innerHtml);
    buttonCol.append(btnElement);

     rowElement.append(buttonCol);
}
const createElement = (element, text, className, key, innerHtml) => {
    let elm = document.createElement(element);
    if(text)
        elm.textContent = text;
    if(className)
        elm.className = className;
    if(key)
        elm.dataset.key = key; //setAttribute("data-num", i);
    if(innerHtml)
        elm.innerHtml = innerHtml.outerHtml;
    return elm;
}

const inititalize = () => {
    searchResultsContainer = document.querySelector('#searchResults');
    favoriteListContainer = document.querySelector('#favoriteListContainer')
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
    console.log(musicData);
}