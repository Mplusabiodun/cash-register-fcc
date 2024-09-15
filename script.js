let inputtedCash = document.getElementById("cash");
let changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
let cash = inputtedCash.value;
let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

// function cashfunc() {
//   let cash = inputtedCash.value;
//   changeDueHtml.innerHTML = "INSUFFICIENT_FUNDS";
//   alert(cash);
// }
function checkCashRegister() {
  cash = parseFloat(cash);

  let change = cash - price;
  let register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  if (register.total < change) {
    changeDue.innerHTML = "INSUFFICIENT_FUNDS";
  } else if (register.total === change) {
    changeDue.innerHTML = "CLOSED";
  } else {
    let changeArr = [];
    let denominations = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01],
    ];
    for (let denom of denominations) {
      let value = denom[1];
      let amount = Math.floor(change / value);
      if (register[denom[0]] >= amount * value) {
        change -= amount * value;
        changeArr.push([denom[0], amount * value]);
        register[denom[0]] -= amount * value;
      }
    }
    console.log(changeArr);
    changeDue.innerHTML = JSON.stringify(changeArr);
  }
}

purchaseBtn.addEventListener("click", (event) => event.preventDefault());
purchaseBtn.addEventListener("click", checkCashRegister);
// purchaseBtn.addEventListener("click", cashfunc);

// Global variables
// let price = 10.00; // price of the item
// let cid = [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.10],
//   ["QUARTER", 4.25],
//   ["ONE", 90.00],
//   ["FIVE", 55.00],
//   ["TEN", 20.00],
//   ["TWENTY", 60.00],
//   ["ONE HUNDRED", 100.00]
// ];

// function checkCashRegister() {
//   let cash = document.getElementById("cash-input").value;
//   cash = parseFloat(cash);

// let change = cash - price;
// let register = cid.reduce((acc, curr) => {
//   acc.total += curr[1];
//   acc[curr[0]] = curr[1];
//   return acc;
// }, { total: 0 });

// if (register.total < change) {
//   document.getElementById("change-due").innerHTML = "INSUFFICIENT_FUNDS";
// } else if (register.total === change) {
//   document.getElementById("change-due").innerHTML = "CLOSED";
// } else {
//   let changeArr = [];
//   let denominations = [
//     ["ONE HUNDRED", 100],
//     ["TWENTY", 20],
//     ["TEN", 10],
//     ["FIVE", 5],
//     ["ONE", 1],
//     ["QUARTER", 0.25],
//     ["DIME", 0.1],
//     ["NICKEL", 0.05],
//     ["PENNY", 0.01]
//   ];
// for (let denom of denominations) {
//   let value = denom[1];
//   let amount = Math.floor(change / value);
//   if (register[denom[0]] >= amount * value) {
//     change -= amount * value;
//     changeArr.push([denom[0], amount * value]);
//     register[denom[0]] -= amount * value;
//   }
// }

// document.getElementById("change-due").innerHTML = JSON.stringify(changeArr);
// }
// }
