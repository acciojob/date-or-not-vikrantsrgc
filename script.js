function isDate(input) {
  const date = (input instanceof Date) ? input : new Date(input);
  return !isNaN(date) && date instanceof Date;
}


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
