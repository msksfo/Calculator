/* ======================== Variables ==========================*/

var displayTotal = document.getElementById('display-total');
var currentNumberSpan = document.getElementById('current-number');

var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var operand = document.getElementById('operand');


var powerOn = document.getElementById('power-on');
var powerOff = document.getElementById('power-off');
var message = document.getElementById('power-message');
var clear = document.getElementById('clear');

var equals = document.getElementById('equals');


var decimal = document.getElementById('decimal');
var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var numbers = document.querySelectorAll('.number');


var runningTotal = 0;
var numbers = [];
var currentNumber = 0;
var lastOperand;


/* ================== Event Handlers ============================= */

clear.addEventListener('click', function(){
	reset();
});

powerOff.addEventListener('click', function(){
	message.innerHTML = 'Goodbye';
	setTimeout(function(){
		message.innerHTML = '';
	}, 1000);

	reset();
});

powerOn.addEventListener('click', function(){
	message.innerHTML = 'Hello';
	reset();
})


add.addEventListener('click', function(){
	doThisForEveryOperand('add');
});

subtract.addEventListener('click', function(){
	doThisForEveryOperand('subtract');
});

multiply.addEventListener('click', function(){
	doThisForEveryOperand('multiply');
});

divide.addEventListener('click', function(){
	doThisForEveryOperand('divide');
});

equals.addEventListener('click', function(){
	operand.innerHTML = '';
	currentNumber = Number(currentNumberSpan.innerHTML);
	numbers.push(currentNumber);
	currentNumberSpan.style.visibility = 'hidden';

	if (numbers.length === 1){
		runningTotal = numbers[0];
		displayTotal.innerHTML = runningTotal;
		displayTotal.style.display = 'block';
		currentNumberSpan.innerHTML = runningTotal;
		numbers = [];
	} else {
		switch (lastOperand){
			case 'add':
				runningTotal = numbers[0] + numbers[1];
				displayTotal.innerHTML =  '= ' + runningTotal;
				displayTotal.style.display = 'block';
				currentNumberSpan.innerHTML = runningTotal;
				numbers = [];
				break;
			case 'subtract':
				runningTotal = numbers[0] - numbers[1];
				displayTotal.innerHTML =  '= ' + runningTotal;
				displayTotal.style.display = 'block';
				currentNumberSpan.innerHTML = runningTotal;
				numbers = [];
				break;
			case 'multiply':
				runningTotal = numbers[0] * numbers[1];
				displayTotal.innerHTML =  '= ' + runningTotal;
				displayTotal.style.display = 'block';
				currentNumberSpan.innerHTML = runningTotal;
				numbers = [];
				break;
			case 'divide':
				runningTotal = numbers[0] / numbers[1];
				displayTotal.innerHTML =  '= ' + runningTotal;
				displayTotal.style.display = 'block';
				currentNumberSpan.innerHTML = runningTotal;
				numbers = [];
				break;
		} // end switch
	}

	
});


decimal.addEventListener('click', doThisForEveryNumber);
zero.addEventListener('click', doThisForEveryNumber);
one.addEventListener('click', doThisForEveryNumber);
two.addEventListener('click', doThisForEveryNumber);
three.addEventListener('click', doThisForEveryNumber);
four.addEventListener('click', doThisForEveryNumber);
five.addEventListener('click', doThisForEveryNumber);
six.addEventListener('click', doThisForEveryNumber);
seven.addEventListener('click', doThisForEveryNumber);
eight.addEventListener('click', doThisForEveryNumber);
nine.addEventListener('click', doThisForEveryNumber);



/* ==================== Functions ================================== */


function reset(){
	lastOperand = '';
	displayTotal.innerHTML = '';
	displayTotal.style.display = 'none';
	currentNumber = 0;
	currentNumberSpan.innerHTML = '';
	operand.innerHTML = '';
	numbers = [];
}

 function doThisForEveryNumber(){
 	displayTotal.style.display = 'none';
	operand.innerHTML = '';
	currentNumberSpan.innerHTML += this.innerHTML;
	currentNumberSpan.style.visibility = 'visible';
	message.innerHTML = '';
}

function doThisForEveryOperand(operand){
	/*
	var add = document.getElementById('add');
	var subtract = document.getElementById('subtract');
	var multiply = document.getElementById('multiply');
	var divide = document.getElementById('divide');
	var operand = document.getElementById('operand');
	*/

	displayTotal.style.display = 'none';
	currentNumber = Number(currentNumberSpan.innerHTML);
	numbers.push(currentNumber);
	currentNumberSpan.innerHTML = '';
	
	operand.innerHTML = this.innerHTML;

	switchCases();

	lastOperand = operand;
}


function switchCases(){
	if (numbers.length === 1){
		runningTotal = numbers[0];
	} else {
		switch (lastOperand){
			case 'add':
				runningTotal = numbers[0] + numbers[1];
				numbers[0] = runningTotal;
				numbers.pop();
				break;
			case 'subtract':
				runningTotal = numbers[0] - numbers[1];
				numbers[0] = runningTotal;
				numbers.pop();
				break;
			case 'multiply':
				runningTotal = numbers[0] * numbers[1];
				numbers[0] = runningTotal;
				numbers.pop();
				break;
			case 'divide':
				runningTotal = numbers[0] / numbers[1];
				numbers[0] = runningTotal;
				numbers.pop();
				break;
		} // end switch
	} // end else
}









