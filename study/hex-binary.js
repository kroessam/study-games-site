const types = ["binary", "hexadecimal", "decimal"];

let typeEl;
let valueEl;
let answerTypeEl;
let answerValueEl;
let type;
let value;
let answerType;
let answerValue;

let currentBinary;
let currentHex;
let currentDecimal;

function init() {
  typeEl = document.getElementById("type");
  valueEl = document.getElementById("value");
  answerTypeEl = document.getElementById("answerType");
  answerValueEl = document.getElementById("answerValue");

  resetProblem();
}

function resetProblem() {
  let remainingTypes = types;

  // get random type from array
  let typeIndex = Math.floor(Math.random() * remainingTypes.length);
  type = remainingTypes[typeIndex];

  remainingTypes.splice(typeIndex, 1); // remove chosen type (no repeats)

  // get random type from remaining array options
  typeIndex = Math.floor(Math.random() * remainingTypes.length);
  answerType = remainingTypes[typeIndex];

  // generate random value and conversions
  currentBinary = getRandomBinary();
  currentDecimal = parseInt(currentBinary, 2);
  currentHex = currentDecimal.toString(16);

  // log all values
  console.log(`Binary: ${currentBinary}`);
  console.log(`Decimal: ${currentDecimal}`);
  console.log(`Hex: ${currentHex}`);

  if (type === "binary") {
    value = currentBinary;
  } else if (type === "decimal") {
    value = currentDecimal;
  } else {
    value = currentHex;
  }

  // update HTML elements
  typeEl.innerText = type;
  valueEl.innerText = value;
  answerTypeEl.innerText = answerType;
}

// Get string of 8 bits
function getRandomBinary(length = 8) {
  let byte = ""

  for (let i = 0; i < length; i++) {
    byte += Math.round(Math.random()).toString();
  }

  return byte;
}

window.addEventListener("load", init);
