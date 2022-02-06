let count = 0;
let displayNumber = document.getElementById("display");

function increament(){
	count = count + 1;
	displayNumber.innerText = count;
}

function decreament(){
	count = count - 1;
	displayNumber.innerText = count;
}