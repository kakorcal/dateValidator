function isValidDate(dateString){
  // First check for the pattern
  if(!/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateString)) {
    return false;
  }

  // Parse the date parts to integers
  var currentYear = new Date().getFullYear();
  var parts = dateString.split('-');
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if(year < 1900 || year >= currentYear || month === 0 || month > 12) {
    return false;
  }

  var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  // Adjust for leap years
  if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
    monthLength[1] = 29;
  }
  // Check the range of the day
  if(day > 0 && day <= monthLength[month - 1]){
    return true;
  }else{
    return false;
  }
};

module.exports = isValidDate;