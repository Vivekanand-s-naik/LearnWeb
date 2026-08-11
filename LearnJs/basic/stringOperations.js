let text = "Vivekanand-S-Naik";

//convert string to uppercase
console.log(text.toUpperCase());

//concetations
const label = 'Mr. ';
text = label.concat(text);
console.log(text)

//split Operations
let textArr = text.split('-')
console.log(textArr);

let lastName = textArr[textArr.length-1];
console.log("lastName : ", lastName);

//substring
let firstName = text.substring(0, 9);
console.log(firstName);

//get character at index value
let charAtIndx = text.charAt(15);
console.log(`Character at Index ${10} =>${charAtIndx}`);

//get Index of particular Character
let indxOfChar = text.indexOf("S");
console.log("Index At Of character 'S' : ", indxOfChar);


let quote = "Quyote\"Hello Whats Up\"";
console.log(quote);