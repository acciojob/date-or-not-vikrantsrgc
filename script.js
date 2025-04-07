function isDate(input) {
  // If input is a Date object and it's valid
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // If input is a string, try to parse it into a Date
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // For all other types, return false
  return false;
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
