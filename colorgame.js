var squarenum = 6;
var pickedcolor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var tryagain = document.getElementById("message");
var h1 = document.querySelector("h1");
var newcolor = document.getElementById("newcolor");
var mode = document.querySelectorAll(".mode");
	
	init();

function init(){
		//mode buttons event listeners
		setupModeButtons();
		setupSquares();
		reset();
}

	newcolor.addEventListener("click", function(){
		reset();
	});

colordisplay.textContent = pickedcolor;


function changeColor(color){
	for(var i = 0; squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = []
	for(var i = 0; i< num ; i++ )
	{
		arr.push(randomColors());
	}
	return arr;
}	

function randomColors()
{
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	 return "rgb(" + red +", " + green + ", " + blue + ")";
}
function reset(){
	colors = generateRandomColors(squarenum);
		pickedcolor = pickColor();
		colordisplay.textContent = pickedcolor;
		h1.style.backgroundColor = "steelblue";
		newcolor.textContent = "New Colors";
		tryagain.textContent = "";
		for(var i =0; i < squares.length; i++)
		{
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else {
				squares[i].style.display = "none";
			}
		}
}
function setupModeButtons(){
		for (var i = 0; i < mode.length; i++)
	{
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? squarenum = 3: squarenum = 6;
			reset();
		});
	}
}
function setupSquares(){
	for(var i = 0; i < squares.length; i++)
		{
			squares[i].style.backgroundColor = colors[i]; 
			squares[i].addEventListener("click", function(){
			var clickedcolor = this.style.backgroundColor;
			if( clickedcolor === pickedcolor) {	
				tryagain.textContent = "Correct!";
				newcolor.textContent = "Play Again?";
				h1.style.backgroundColor = clickedcolor;
				changeColor(clickedcolor);
			}
			else{
				this.style.backgroundColor = "#232323";
				tryagain.textContent = "Try Again";
			}
		});
	}
}