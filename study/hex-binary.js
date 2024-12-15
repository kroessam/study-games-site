const types = ["binary", "hexadecimal", "decimal"];

let typeEl;
let valueEl;
let answerTypeEl;
let answerValueEl;
let type = "Linked!";
let value = "Linked!";
let answerType = "Linked!";
let answerValue;

function init() {
  typeEl = document.getElementById("type");
  valueEl = document.getElementById("value");
  answerTypeEl = document.getElementById("answerType");
  answerValueEl = document.getElementById("answerValue");

  setQuestion();
}

function setQuestion() {
  let remainingTypes = types;

  // get random type from array
  let typeIndex = Math.floor(Math.random() * remainingTypes.length);
  type = remainingTypes[typeIndex];

  remainingTypes.splice(typeIndex, 1); // remove chosen type (no repeats)

  // get random type from remaining array options
  typeIndex = Math.floor(Math.random() * remainingTypes.length);
  answerType = remainingTypes[typeIndex];

  // create random value of chosen type
  value = getRandomBinary();
  console.log(`Decimal: ${parseInt(value, 2)}`);          // get decimal equivalent
  console.log(`Hex: ${parseInt(value, 2).toString(16)}`); // get hexadecimal equivalent

  // update HTML elements
  typeEl.innerText = type;
  valueEl.innerText = value;
  answerTypeEl.innerText = answerType;
}

// Get random byte of binary (as string)
function getRandomBinary(length = 8) {
  let byte = ""

  for (let i = 0; i < length; i++) {
    byte += Math.round(Math.random()).toString();
  }

  return byte;
}

window.addEventListener("load", init);
