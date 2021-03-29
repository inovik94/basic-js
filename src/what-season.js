const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  
  try {
    date.getTime()
  } 
  catch(error) {
    throw new Error('error')
  }
  
  switch(date.getMonth()+1){
    case 12:
    case 1:
    case 2:
       return 'winter';
       break;

    case 3:
    case 4:
    case 5:
       return 'spring';
       break;
    
    case 6:
    case 7:
    case 8:
       return 'summer';
       break;
    case 9:
    case 10:
    case 11:
       return 'fall';
       break;
  }

}

