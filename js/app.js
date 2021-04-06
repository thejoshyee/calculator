
//create add, subtract, multiply, divide functions

// add function
function add(num1, num2) {
    return num1 + num2;
}

// subtract function
function subtract(num1, num2) {
    return num1 - num2;
}

// multiply function 
function multiply(num1, num2) {
    return num1 * num2;
}

// divid function
function divide(num1, num2) {
    return num1 / num2;
}


// operate function
    //takes 2 numbers and calls a function 
const operate = document.querySelector(".equals");
    operate.addEventListener("click", function() {
        add();
    })


//get display
const displayText = document.querySelector(".displayText");

//output number
let total1 = 0;
let total2 = 0;


//get the buttons
const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", function() {
    displayText.innerHTML="7";
    total1 += 7;
})

const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", function() {
    displayText.innerHTML="8";
    total1 += 8;
})

const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", function() {
    displayText.innerHTML="9";
    total1 += 9;
})


// operator buttons
const addButton = document.querySelector(".add");
addButton.addEventListener("click", function() {

})

