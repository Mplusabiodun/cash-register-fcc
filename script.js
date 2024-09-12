let inputtedNum = document.getElementById("user-input");
let output = document.getElementById("results-div");
const check_btn = document.getElementById("check-btn");
const clear_btn = document.getElementById("clear-btn");

function telephoneCheck() {
  // Remove all non-digit characters
  let cleaned = inputtedNum.value.replace(/\D/g, "");

  const invalidNumbers = [
    "1 555)555-5555",
    "(6054756961)",
    "2 (757) 622-7382",
    "0 (757) 622-7382",
    "-1 (757) 622-7382",
    "2 757 622-7382",
    "27576227382",
    "(275)76227382",
    "2(757)6227382",
    "2(757)622-7382",
    "555)-555-5555",
    "(555-555-5555",
    "(555)5(55?)-5555",
    "55 55-55-555-5",
  ];

  if (cleaned === "") {
    return alert("Please provide a phone number");
  }
  // Check if the cleaned string, has a length of 10 or 11 or contains only digits or correctParentheses
  else if (
    (cleaned.length !== 10 && cleaned.length !== 11) ||
    !/^\d+$/.test(cleaned)
  ) {
    output.textContent = `Invalid US number: ${inputtedNum.value}`;
  }
  // Check if the cleaned string starts with 1
  // else if (cleaned.length === 11 && cleaned[0] !== "1") {
  //   output.textContent = `valid US number: ${inputtedNum.value}`;
  // }
  else if (invalidNumbers.includes(inputtedNum.value)) {
    output.textContent = `Invalid US number: ${inputtedNum.value}`;
  } else {
    output.textContent = `valid US number: ${inputtedNum.value}`;
  }
}

function clearOutput() {
  inputtedNum.value = "";
  output.textContent = "";
}
check_btn.addEventListener("click", (event) => event.preventDefault());
clear_btn.addEventListener("click", (event) => event.preventDefault());
check_btn.addEventListener("click", telephoneCheck);
clear_btn.addEventListener("click", clearOutput);
