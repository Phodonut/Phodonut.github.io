var col1SRC = ["images/1col1.jpg", "images/2col1.jpg", "images/3col1.jpg", "images/4col1.jpg"];
var col2SRC = ["images/1col2.jpg", "images/2col2.jpg", "images/3col2.jpg", "images/4col2.jpg"];
var col3SRC = ["images/1col3.jpg", "images/2col3.jpg", "images/3col3.jpg", "images/4col3.jpg"];

window.onload = function(){
	navbarSticky()
	if (window.location.href.match('photography.html') != null) {
   			colInit();
  	}
  	if (window.location.href.match('portraits.html') != null) {
   			imageArraySetup();
  	}
};

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function navbarSticky() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}


function openContact(){
	hidePages();
	scrollTop();
	document.getElementById("Contact").style.display = "block";

}

function scrollTop(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}

function hidePages(){
	var i, pages;
	pages = document.getElementsByClassName("pages");
	for(i = 0; i < pages.length; i++){
		pages[i].style.display = "none";
	}

}

function colInit(){
	document.getElementById("1col1").src = col1SRC[0];
	document.getElementById("1col1").style.opacity = .01;
	document.getElementById("1col2").src = col2SRC[0];
	document.getElementById("1col2").style.opacity = .01;
	document.getElementById("1col3").src = col3SRC[0];
	document.getElementById("1col3").style.opacity = .01;
	window.setTimeout(colBegin(),1000);
}

function colBegin(){
	window.setTimeout(colFadeIn.bind(null,1,1,1),500);
}


function preload(index){
	//alert(index);
	switch(index){
		case 2:
			document.getElementById("2col1").src = col1SRC[1];
			document.getElementById("2col1").style.opacity = .01;
			document.getElementById("2col2").src = col2SRC[1];
			document.getElementById("2col2").style.opacity = .01;
			document.getElementById("2col3").src = col3SRC[1];
			document.getElementById("2col3").style.opacity = .01;
			break;
		case 3:
			document.getElementById("3col1").src = col1SRC[2];
			document.getElementById("3col1").style.opacity = .01;
			document.getElementById("3col2").src = col2SRC[2];
			document.getElementById("3col2").style.opacity = .01;
			document.getElementById("3col3").src = col3SRC[2];
			document.getElementById("3col3").style.opacity = .01;
			break;
		case 4:
			document.getElementById("4col1").src = col1SRC[3];
			document.getElementById("4col1").style.opacity = .01;
			document.getElementById("4col2").src = col2SRC[3];
			document.getElementById("4col2").style.opacity = .01;
			document.getElementById("4col3").src = col3SRC[3];
			document.getElementById("4col3").style.opacity = .01;
			break;
	}
}

function colFadeReset(){

}

function colFadeIn(index, opacity, col){
	if(index == 1 && col < 4){
		switch(col){
			case 1:
				//alert("Going to now fade in index 1");
				fadeElement(document.getElementById("1col1"), 0, 1, 1200);
				break;
			case 2:
				fadeElement(document.getElementById("1col2"), 0, 1, 1200);
				break;
			case 3:
				fadeElement(document.getElementById("1col3"), 0, 1, 1200);
				window.setTimeout(preload.bind(null,index+1),1500);
				window.setTimeout(colFadeIn.bind(null,(index+1),1,1),4500);
				break;
		}
		window.setTimeout(colFadeIn.bind(null,1,1,(col+1)),800);
	} else if (index == 2 && col < 4){

		switch(col){
			case 1:
				//alert("Going to now fade in index 2, preload index 3 after");
				fadeElement(document.getElementById("2col1"), 0, 1, 1200);
				break;
			case 2:
				fadeElement(document.getElementById("2col2"), 0, 1, 1200);
				break;
			case 3:
				fadeElement(document.getElementById("2col3"), 0, 1, 1200);
				window.setTimeout(preload.bind(null,index+1),1500);
				window.setTimeout(colFadeIn.bind(null,(index+1),1,1),4500);
				break;

		}
		window.setTimeout(colFadeIn.bind(null,2,1,(col+1)),800);
	} else if (index == 3 && col < 4){
		switch(col){
			case 1:
				//alert("Going to now fade in index 3, preload index 4 after");
				fadeElement(document.getElementById("3col1"), 0, 1, 1200);
				break;
			case 2:
				fadeElement(document.getElementById("3col2"), 0, 1, 1200);
				break;
			case 3:
				fadeElement(document.getElementById("3col3"), 0, 1, 1200);
				window.setTimeout(preload.bind(null,index+1),1500);
				window.setTimeout(colFadeIn.bind(null,(index+1),1,1),4500);
				break;

		}
		window.setTimeout(colFadeIn.bind(null,3,1,(col+1)),800);
	} else if (index == 4 && col < 4){
		switch(col){
			case 1:
				//alert("Going to now fade in index 4");
				fadeElement(document.getElementById("4col1"), 0, 1, 1200);
				break;
			case 2:
				fadeElement(document.getElementById("4col2"), 0, 1, 1200);
				break;
			case 3:
				fadeElement(document.getElementById("4col3"), 0, 1, 1200);
				window.setTimeout(preload.bind(null,index+1),1500);
				window.setTimeout(colFadeIn.bind(null,(index+1),1,1),4500);
				break;

		}
		window.setTimeout(colFadeIn.bind(null,4,1,(col+1)),800);
	} else if (index == 5 && col < 4){
		switch(col){
			case 1:
				//alert("Reseting index 2 and 3 to opacity 0");
				document.getElementById("2col1").style.opacity = 0.01;
				document.getElementById("3col1").style.opacity = 0.01;
				document.getElementById("2col2").style.opacity = 0.01;
				document.getElementById("3col2").style.opacity = 0.01;
				document.getElementById("2col3").style.opacity = 0.01;
				document.getElementById("3col3").style.opacity = 0.01;
				//alert("Fading index 4 down to index 1");
				fadeElement(document.getElementById("4col1"), 1, 0.01, 1200);
				break;
			case 2:
				fadeElement(document.getElementById("4col2"), 1, 0.01, 1200);
				break;
			case 3:
				fadeElement(document.getElementById("4col3"), 1, 0.01, 1200);
				allLoaded = true;
				window.setTimeout(colFadeIn.bind(null,((index+1)%4),1,1),4500);
				break;

		}
		window.setTimeout(colFadeIn.bind(null,5,1,(col+1)),800);
	}

}

function fadeElement(el, start, end, time){
	var range = end - start;
	var increasing = end>start;
	var steps = time/20;
	var increment = range/steps;
	var current = start;
	var more = true;
	function next(){
		current = current + increment;
        if (increasing) {
            if (current > end) {
                current = end;
                more = false;
            }
        } else {
            if (current < end) {
                current = end;
                more = false;
            }
        }
        el.style.opacity = current;
        if (more) {
            setTimeout(next, 20);
        }
    }
    next();
}


function newRowCheck(){
	if((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight-2){ //if at bottom and scrolling
		newRow(1);
	}
}
// Below is code for the portrait section or generic photo wall implementation
function newRow(amount){
	if(amount == 0){
		return;
	}
	//console.log("At bottom, New Div!!");
	var container = document.getElementById("PortraitContainer");
	var div = document.createElement('div');
	div.setAttribute("class", "PhotoRowDiv");
	PortraitContainer.appendChild(div);

	//Insert images and styles here, replicate entire row styling
	var indiv = [];
	var image = [];
	var vignette = [];
	for(i = 1; i < 5; i++){
		indiv[i] = document.createElement('div');
		indiv[i].setAttribute("class", "PhotoIndiv");
		indiv[i].setAttribute("onclick", "imgFullscreen(this)");
		div.appendChild(indiv[i]);
		image[i] = document.createElement('img');
		image[i].setAttribute("class", "RowIMG");
		image[i].src = "images/" + imgArray[(i+4*imgRowCounter)] + ".jpg";  //images/imgArray#.jpg
		//console.log(imgRowCounter);
		indiv[i].appendChild(image[i]);
		vignette[i] = document.createElement('div');
		vignette[i].setAttribute("class", "vignette");
		indiv[i].appendChild(vignette[i]);
		//console.log("width: " + image[i].width);
		//console.log("height: " + image[i].height);

		//console.log(i);
	}
	imgRowCounter++;
	amount--;
	newRow(amount);
}

var imgRowCounter = 0;
var imgArray = []
function imageArraySetup(){
	for(i = 1; i < 20; i++){ //number of images usable
		imgArray[i] = ("imgArray"+ i); // Creates a src name to be used in above row creation function
	}
		newRow(3);
}


var imageCounter = 0;
function imgFullscreen(div){   //this works for horizontal setup, not scalable for mobile. If VH > VW, create other function
	//Refactoring source from the low quality to the highquality
	var imgSource = div.getElementsByTagName('img')[0].src;
	imgSource = imgSource.slice(0, -4);
	nextImageSource = (imgSource + "_" + 2 + ".jpg");
	imgSource = (imgSource + "_" + 1 + ".jpg");

	var fullscreenDiv = document.createElement('div');
	fullscreenDiv.setAttribute("class", "fullscreenDiv");
	fullscreenDiv.setAttribute("id", "activeFullscreen");
	document.body.appendChild(fullscreenDiv);

	var darkenOut = document.createElement('div');
	darkenOut.setAttribute("class", "fullDarkFade");
	darkenOut.setAttribute("onclick", "deleteFullscreen()");
	fullscreenDiv.appendChild(darkenOut);

	var arrowContainerL = document.createElement('div');
	arrowContainerL.setAttribute("class", "arrowContainerL");
	fullscreenDiv.appendChild(arrowContainerL);

	//var arrowL = document.createElement('button');
	//arrowL.setAttribute("class", "arrows");
	//arrowL.innerText = "<";
	//arrowContainerL.appendChild(arrowL);

	var imgFull = document.createElement('img');
	imgFull.setAttribute("class", "imgFull");
	imgFull.src = imgSource;
	fullscreenDiv.appendChild(imgFull);

	var arrowContainerR = document.createElement('div');
	arrowContainerR.setAttribute("class", "arrowContainerR");
	fullscreenDiv.appendChild(arrowContainerR);

	var arrowR = document.createElement('button');
	arrowR.setAttribute("class", "arrows");
	arrowR.setAttribute("onclick", "nextImageArrow(this.parentNode.parentNode)")
	arrowR.innerText = ">";
	arrowContainerR.appendChild(arrowR);

	//var descriptionContainer = document.createElement('div');
	//descriptionContainer.setAttribute("class","imgDescriptionContainer");
	//fullscreenDiv.appendChild(descriptionContainer);

	var description = document.createElement('h1');
	description.setAttribute("class", "imgDescription");
	description.innerText = "testing";
	fullscreenDiv.appendChild(description);

	checkImageBeyond(imgSource, nextImageSource, fullscreenDiv);

}

function deleteFullscreen(){
	imageCounter = 0;;
	var el = document.getElementById("activeFullscreen");
	el.parentNode.removeChild(el);
}

function nextImageArrow(containingDiv){
	if(imageCounter == 0){
		var arrowL = document.createElement('button');
		arrowL.setAttribute("class", "arrows");
		arrowL.setAttribute("onclick", "previousImageArrow(this.parentNode.parentNode)")
		arrowL.innerText = "<";
		var prevArrowContainer = containingDiv.childNodes[1]
		prevArrowContainer.appendChild(arrowL);
	}
	imageCounter++;

	var initSrc = containingDiv.childNodes[2].src;
	initSrc = initSrc.slice(0, -4);
	var lastChar = initSrc[initSrc.length -1];
	lastChar = parseInt(lastChar)+1;
	var nextImageChar = lastChar +1;
	nextImageChar = nextImageChar.toString();
	lastChar = lastChar.toString();

	initSrc = initSrc.slice(0, -1);
	nextSrc = initSrc + nextImageChar;
	initSrc = initSrc + lastChar;
	initSrc = (initSrc + ".jpg");
	nextSrc = (nextSrc + ".jpg");
	checkImageBeyond(initSrc, nextSrc, containingDiv);
}

function previousImageArrow(containingDiv){
	imageCounter--;
	if(imageCounter == 0){
		var ArrowDiv = containingDiv.childNodes[1];
		ArrowDiv.removeChild(ArrowDiv.childNodes[0]);
	}
	console.log(containingDiv);
	var initSrc = containingDiv.childNodes[2].src;
	initSrc = initSrc.slice(0, -4);
	var lastChar = initSrc[initSrc.length -1];
	lastChar = parseInt(lastChar)-1;
	var nextImageChar = lastChar -1;
	nextImageChar = nextImageChar.toString();
	lastChar = lastChar.toString();

	initSrc = initSrc.slice(0, -1);
	nextSrc = initSrc + nextImageChar;
	initSrc = initSrc + lastChar;
	initSrc = (initSrc + ".jpg");
	nextSrc = (nextSrc + ".jpg");
	checkImageBeyond(initSrc, nextSrc, containingDiv);
	



	if(noRightArrow){
		noRightArrow = false;
		var arrowR = document.createElement('button');
		arrowR.setAttribute("class", "arrows");
		arrowR.setAttribute("onclick", "nextImageArrow(this.parentNode.parentNode)")
		arrowR.innerText = ">";
		containingDiv.childNodes[3].appendChild(arrowR);
	}

}

var noRightArrow = false;
function checkImageBeyond(imageSrc, nextSrc, containingDiv){
	var img = new Image();

	containingDiv.childNodes[2].src = imageSrc;

	img.onerror = function(){
		//console.log("isn't valid");
		lastChar = imageSrc.slice(0,-4);
		lastChar = lastChar[lastChar.length-1];
		lastChar = parseInt(lastChar);
		if(lastChar > 1){
			containingDiv = containingDiv.childNodes[3];
			containingDiv.removeChild(containingDiv.childNodes[0]);
			noRightArrow = true;
		}
	}
	img.src = nextSrc;

}

function changeImage(imageSrc, containingDiv){
	var img = new Image();
	img.onload = function(){
		containingDiv.childNodes[2].src = imageSrc;

	}
	img.onerror = function(){
		console.log("isn't valid");
		containingDiv = containingDiv.childNodes[3];
		containingDiv.removeChild(containingDiv.childNodes[0]);
		noRightArrow = true;
	}
	img.src = imageSrc;
}