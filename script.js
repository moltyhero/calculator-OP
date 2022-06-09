let currentDisplay = "";
let numbers = document.querySelectorAll(".number");
let operators = document.getElementById("operators");
operators = operators.childNodes;
let operatorsArray = Array.prototype.slice.call(operators);
operatorsArray.push(document.getElementById("result"));
console.log('operators :>> ', operatorsArray);
let firstNumber;
let secondNumber;
let currentOperation;
let display = document.getElementById("display");
let dotBtn = document.getElementById("dot");


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
			if (num2 === 0)
			{
				console.log("????");
				return "What are you doing??? Diving by 0 is impossible!";
			}
			
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
	});
});

operatorsArray.forEach(operator => {
	operator.addEventListener("click", function()
	{
		currentDisplay = "";
		dotBtn.disabled = false;
		let isEquals = operator.innerText.localeCompare("=");
		if (isEquals)
		{
			currentOperation = operator.innerText;
		}
		if (firstNumber)
		{
			secondNumber = parseFloat(display.innerText);
			let result = operate(firstNumber, secondNumber, currentOperation);
			populateDisplay(result);
			currentOperation = "";
			currentDisplay = "";
			firstNumber = parseFloat(result);
			
		}
		else
		{
			if (isEquals)
			{
				firstNumber = parseFloat(display.innerText); 
				populateDisplay(""); 
			}
			
		}
		secondNumber = "";
	})
})

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () =>
{
	firstNumber = "";
	secondNumber = "";
	currentDisplay = "";
	populateDisplay("");
});


dotBtn.addEventListener("click", () =>
{
	dotBtn.disabled = true;
});