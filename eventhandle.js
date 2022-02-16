let numClicks = 0;

function circ1Click(){
	numClicks += 1;
	document.getElementById("clicked").innerHTML = numClicks;
};

let circOpacity = true;
function circ3Click(){
	
	if(circOpacity) {
		document.getElementById("circ3").style.opacity = "1.0";
	}
	else {
		document.getElementById("circ3").style.opacity = "0.0";
	}
    circOpacity = !circOpacity;
};