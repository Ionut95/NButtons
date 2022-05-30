function generate() {
	var noBtns = document.getElementById("myNumber").value;
	for (var index = 1; index <= noBtns; ++index) {
	  	const button = document.createElement("button");
	  	button.innerText = "Click me";
	  	button.value = index;
	  	button.addEventListener("click", function() {
	    	var result = Math.floor(Math.random() * noBtns) + 1;
	    	if (button.value == result) {
	      		alert('You win!');
	    	} else {
	      		alert('You lose!');
	    	}
		});
	  	document.body-myBody.appendChild(button);
	}
}
