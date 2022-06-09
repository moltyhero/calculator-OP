let currentDisplay = "";
let numbers = document.querySelectorAll(".number");
let operators = document.getElementById("operators");
operators = operators.children;
let firstNumber;
let secondNumber;
let display = document.getElementById("display");

function add(num1, num2) {
	return num1 + num2;
}

function substract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, num2, operator) {
	switch (operator) {
		case "+":
			return add(num1, num2);
		case "-":
			return substract(num1, num2);
		case "*":
			return multiply(num1, num2);
		case "/":
			return divide(num1, num2);
	}
}

function populateDisplay(num) {
	currentDisplay += num;
	display.innerText = currentDisplay;
}

numbers.forEach(number => {
	number.addEventListener("click", function() {
		populateDisplay(number.innerText);
		console.log('number :>> ', number);
	});
});

operators.forEach(operator => {
	operator.addEventListener("click", function()
	{
		if (firstNumber)
		{
			secondNumber = display.innerText;
		}
	})
})