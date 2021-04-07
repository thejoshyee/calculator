// class calculator 
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    //All Clear Function
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    // Append the numbers to the screen
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand + number;

    }
    // Delete key
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }
    //Choose the Operation and store it in operation variable
    chooseOperation(operation) {
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    //compute the equation
    compute() {
        //final computation stored in this variable
        let computation
        // parse float to decimals and whole numbers
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        //check if not a number
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                //check if numbers are dividing by 0 if so, return
                if (prev === 0 || current === 0) return;
                computation = prev / current
                break
            default: 
                return 
        }
        // show the result of the computation to the current opperand field
        this.currentOperand = computation
        // this stops the computing process if you keep clicking equals button
        this.operation = undefined 
        this.previousOperand = ''
    }

    // update the display
    updateDisplay() {
        // the current operand will go in the inner text area of current operand field
        this.currentOperandTextElement.innerText = this.currentOperand
        // updates the previous display after the operator
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        // if all clear, this clears the previous Operand Text element area to blank
        } else {
            this.previousOperandTextElement.innerText = ''
        } 
    }
}

//Button Variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// new calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

//equals button
equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

//ac button
allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

//delete button
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})