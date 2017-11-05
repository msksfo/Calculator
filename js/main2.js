/* ======================== Variables ==========================*/

var displayTotal = document.getElementById('display-total');
var currentNumberSpan = document.getElementById('current-number');
var h2 = document.getElementById('h2');
var powerOn = document.getElementById('power-on');
var powerOff = document.getElementById('power-off');
var message = document.getElementById('power-message');
var clear = document.getElementById('clear');

var fadeInOut = document.querySelectorAll('.fade-in-out');

var operand = document.getElementById('operand');
var equals = document.getElementById('equals');

var runningTotal = 0;
var numbers = [];
var currentNumber = 0;
var lastOperand;

/* ================== Event Handlers ============================= */

clear.addEventListener('click', function(){
	message.innerHTML = '';
	reset();
});

powerOff.addEventListener('click', function(){
	powerOff.style.color = '#f1948a';
	powerOff.style.backgroundColor = '#fbeee6';
	powerOn.style.color = '#1c0880';
	powerOn.style.backgroundColor = '#c9bffb';
	h2.style.opacity = .2;
	h2.innerHTML = 'Calculator';
	message.innerHTML = 'Goodbye';

	for (let k = 0; k < fadeInOut.length; k++){
		fadeInOut[k].style.color = 'rgba(28, 8, 128, 0)';
	}

	setTimeout(function(){
		message.innerHTML = '';
	}, 1000);

	setTimeout(function(){
		powerOff.style.color = '#1c0880';
		powerOff.style.backgroundColor = '#c9bffb';
	}, 2000);

	reset();
});

powerOn.addEventListener('click', function(){
	
	for (let k = 0; k < fadeInOut.length; k++){
		fadeInOut[k].style.color = 'rgba(28, 8, 128, 1)';
	}

	powerOn.style.color = '#f1948a';
	powerOn.style.backgroundColor = '#fbeee6';
	h2.style.opacity = 0;
	h2.innerHTML = 'I Hate Math';
	h2.style.opacity = 1;
	message.innerHTML = 'Hello';
	message.style.opacity = 1;
	reset();
});
	
equals.addEventListener('click', function(){
	operand.innerHTML = '';
	currentNumber = Number(currentNumberSpan.innerHTML);
	numbers.push(currentNumber);
	currentNumberSpan.style.visibility = 'hidden';

	if (numbers.length === 1){
		runningTotal = Number((numbers[0]).toFixed(2));
		displayTotal.innerHTML = runningTotal;
		displayTotal.style.display = 'block';
		currentNumberSpan.innerHTML = runningTotal;
		numbers = [];
	} else {
		switch (lastOperand){
			case 'add':
				runningTotal = Number((numbers[0] + numbers[1]).toFixed(2));
				displayTotal.innerHTML =  '= ' + runningTotal;
				displayTotal.style.display = 'block';
				currentNumberSpan.innerHTML = runningTotal;
				numbers = [];
				break;
			case 'subtract':
				runningTotal = Number((numbers[0] - numbers[1]).toFixed(2));
				displayTotal.innerHTML =  '= ' + runningTotal;
				displayTotal.style.display = 'block';
				currentNumberSpan.innerHTML = runningTotal;
				numbers = [];
				break;
			case 'multiply':
				runningTotal = Number((numbers[0] * numbers[1]).toFixed(2));
				displayTotal.innerHTML =  '= ' + runningTotal;
				displayTotal.style.display = 'block';
				currentNumberSpan.innerHTML = runningTotal;
				numbers = [];
				break;
			case 'divide':
				runningTotal = Number((numbers[0] / numbers[1]).toFixed(2));
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
				runningTotal = Number((numbers[0] + numbers[1]).toFixed(2));
				numbers[0] = runningTotal;
				numbers.pop();
				break;
			case 'subtract':
				runningTotal = Number((numbers[0] - numbers[1]).toFixed(2));
				numbers[0] = runningTotal;
				numbers.pop();
				break;
			case 'multiply':
				runningTotal = Number((numbers[0] * numbers[1]).toFixed(2));
				numbers[0] = runningTotal;
				numbers.pop();
				break;
			case 'divide':
				runningTotal = Number((numbers[0] / numbers[1]).toFixed(2));
				numbers[0] = runningTotal;
				numbers.pop();
				break;
		} // end switch
	} // end else
}

doThisForEveryNumber();
doThisForEveryOperand();



