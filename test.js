let arr = [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 25, 66];

let group = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function createObjectFromId(arr) { // creates an object holding the objects from "group" as values and those values are also objets therefore
  return arr
  .reduce((finalObject, element) => {
    finalObject[element.id] = element;
    return finalObject;
  }, {})
}

let usersObject = createObjectFromId(group);

function camelize(str) {
  // camelizes "some-word" and returns formatted
  let formatStr = str
  .split("-")
  .reduce((finalStr, currentString) => {
    return finalStr + currentString[0].toUpperCase()
    + currentString.slice(1);
  }, "");
  return formatStr[0].toLowerCase() + formatStr.slice(1);
}

function filterRange(arr, a, b) {
  // returns a filtered array
  return arr
  .filter(element => element >= a || element === b);
}

function removeFromRange(a, b) {
  // changes the array perserving values between a and b
  arr = arr.filter(e => a < e && b > e);
}

function showTestResult(text) {
  // print some result as a <p> element on the page
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  document.body.appendChild(paragraph);
}

function sortDecrease(arr) {
  // sort array in decreasing order
  arr.sort((a,b) => b-a);
}

function groupById(arr) {

}

// here i call the functions

showTestResult(filterRange(arr, 8, 3));
removeFromRange(5, 60);
sortDecrease(arr); // here we reverse the order
showTestResult(arr); // then we print it so its descending
showTestResult(camelize("hello-world"));
console.log(usersObject);