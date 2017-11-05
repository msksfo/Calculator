/* ======================== Variables ==========================*/

var displayTotal = document.getElementById('display-total');
var currentNumberSpan = document.getElementById('current-number');

var powerOn = document.getElementById('power-on');
var powerOff = document.getElementById('power-off');
var message = document.getElementById('power-message');
var clear = document.getElementById('clear');

var operand = document.getElementById('operand');
var equals = document.getElementById('equals');

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
	var numbers = document.querySelectorAll('.number');
 	for (let i = 0; i < numbers.length; i++){
 		numbers[i].addEventListener('click', function(){
 			 	displayTotal.style.display = 'none';
 				operand.innerHTML = '';
 				currentNumberSpan.innerHTML += this.innerHTML;
 				currentNumberSpan.style.visibility = 'visible';
 				message.innerHTML = '';
 			});
 	}
}

function doThisForEveryOperand(){
	var symbols = document.querySelectorAll('.compute');

	for (let j = 0; j < symbols.length; j++){
		symbols[j].addEventListener('click', function(e){
			var target = e.target;

			displayTotal.style.display = 'none';
			currentNumber = Number(currentNumberSpan.innerHTML);
			numbers.push(currentNumber);
			currentNumberSpan.innerHTML = '';
			operand.innerHTML = this.innerHTML;
			
			switchCases();
			lastOperand = target.id;;
		});
	}
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

doThisForEveryNumber();
doThisForEveryOperand();



