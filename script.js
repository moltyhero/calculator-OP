let currentDisplay = "";
let numbers = document.querySelectorAll(".number");
let operators = document.getElementById("operators");
operators = operators.childNodes;
let operatorsArray = Array.prototype.slice.call(operators);
operatorsArray.push(document.getElementById("result"));
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
				return "What are you doing??? Diving by 0 is impossible!";
			}
			
			return divide(num1, num2);
	}
}

function populateDisplay(num) {
	if (num == "." && currentDisplay == "")
	{
		
	}
	else
	{
		currentDisplay += num;
		display.innerText = currentDisplay;
		if (num == ".")
			dotBtn.disabled = true;
	}
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
		let notEquals = !(operator.innerText == ("="));
		
		if (firstNumber && !(currentOperation == "="))
		{
			console.log('ENTER ');
			secondNumber = parseFloat(display.innerText);
			let result = operate(firstNumber, secondNumber, currentOperation);
			populateDisplay(result);
			if (!notEquals)
			{
				currentOperation = "=";
				firstNumber = ""
			}
			else
				firstNumber = parseFloat(display.innerText);
			currentDisplay = "";
			
			
		}
		else
		{
			if (notEquals)
			{
				firstNumber = parseFloat(display.innerText); 
				populateDisplay(""); 
			}
			else
				firstNumber = "";

			
		}
		if (notEquals)
		{
			currentOperation = operator.innerText;
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

let backBtn = document.getElementById("back");
backBtn.addEventListener("click", () =>
{
	currentDisplay = currentDisplay.slice(0, -1)
	populateDisplay("");
});

// Add event listener on keyup
document.addEventListener('keyup', (event) => {
	var name = event.key;
	var code = event.code;
	// Alert the key name and key code on keydown
	console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
	document.getElementsByName(name)[0].click();
  }, false);