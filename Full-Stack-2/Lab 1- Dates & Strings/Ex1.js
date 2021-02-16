

const halloween = function(dt) {

    if(dt.getMonth() === 9 && dt.getDate() === 31){  // ternary
        return "Happy Halloween!";
    } else{
        return "Just another day.";
    }

   }
   
   halloween(new Date("2013/10/31")) // "Happy Halloween!"
   
   halloween(new Date("2012/07/31")) // "Just another day."
   
   halloween(new Date("2011/10/12")) // "Just another day."

   