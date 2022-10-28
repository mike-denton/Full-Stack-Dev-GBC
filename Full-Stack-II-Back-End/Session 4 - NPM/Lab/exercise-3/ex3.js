

const moment = require('moment');

const getCurrentDate = () => {

  console.log(new Date())
  const wrapped = moment(new Date());
  
  console.log(wrapped.toLocaleString());
  //console.log(wrapped.toJSON());
  console.log(wrapped.format('MMMM Do YYYY, h:mm:ss a'))
}

getCurrentDate();