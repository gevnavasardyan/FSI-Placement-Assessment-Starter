// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Gevorg Navasardyan" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb and minus-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the element with and id of add-cc and minus-cc
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
// selecting the element with and id of add-sugar and minus-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// selecting element to place total quantities in after calcuations
const gbQty = document.querySelector('#qty-gb');
const ccQty = document.querySelector('#qty-cc');
const sugarQty = document.querySelector('#qty-sugar');
const totalQty = document.querySelector('#qty-total');

function sumTotal() {
    let sumTotal = gb + cc + sugar;
    totalQty.textContent = sumTotal;
}

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks
gbPlusBtn.addEventListener('click', function(e) {
    gb++;
    gbQty.textContent = gb;
    sumTotal();
})

gbMinusBtn.addEventListener('click', function(e) {
    if (gb > 0) {
        gb--;
        gbQty.textContent = gb;
        sumTotal();
    }
})

ccPlusBtn.addEventListener('click', function(e) {
    cc++;
    ccQty.textContent = cc;
    sumTotal();
})

ccMinusBtn.addEventListener('click', function(e) {
    if (cc > 0) {
        cc--;
        ccQty.textContent = cc;
        sumTotal();
    }
})

sugarPlusBtn.addEventListener('click', function(e) {
    sugar++;
    sugarQty.textContent = sugar;
    sumTotal();
})

sugarMinusBtn.addEventListener('click', function(e) {
    if (sugar > 0) {
        sugar--;
        sugarQty.textContent = sugar;
        sumTotal();
    }
})