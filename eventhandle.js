
// Circle 1 Counter
let numClicks = 0;

function circ1Click(){
	numClicks += 1;
	document.getElementById("circ1Clicked").innerHTML = numClicks;
};


// moused over two functions
function circ2Mouse(){

    document.getElementById("circ2Over").style.border = "2px solid black";

}

function circ2MouseOut(){

    document.getElementById("circ2Over").style.border = "0";

}

// Circle Disapearing
let circOpacity = true;

function circ3Click(){
	
    // if showing, make opacity = 0 , if not showing, make opacity = 1
	if(circOpacity) {
		document.getElementById("circ3Clicked").style.opacity = "0.0";
	}
	else {
		document.getElementById("circ3Clicked").style.opacity = "1.0";
	}
    circOpacity = !circOpacity;
    
};