var col1SRC = ["images/1col1.jpg", "images/2col1.jpg", "images/3col1.jpg", "images/4col1.jpg"];
var col2SRC = ["images/1col2.jpg", "images/2col2.jpg", "images/3col2.jpg", "images/4col2.jpg"];
var col3SRC = ["images/1col3.jpg", "images/2col3.jpg", "images/3col3.jpg", "images/4col3.jpg"];
var noNewRows = false;
var docHeight = getHeight();
var docWidth = getWidth();
window.onload = function(){
	navbarSticky()
	if (window.location.href.match('photography.html') != null) {
   			colInit();
  	}
  	if ((window.location.href.match('portraits.html') != null)) {
  		csvSetup(csvPortraits);
  		noNewRows = false;
   		imageArraySetup();
  	}else if ((window.location.href.match('retouching.html') != null)) {
  		alert("page under construction");
  		csvSetup(csvRetouching);
  		noNewRows = false;
   		imageArraySetup();

  	}else if ((window.location.href.match('manipulated.html') != null)) {
  		alert("page under construction")
  		csvSetup(csvManipulated);
  		noNewRows = false;
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

function openHome(){
	if(screen.width <= screen.height){
		window.location.href = "./index.html"; // eventually do a toggle here that mimicks on hover for mobile
	}else {
		window.location.href = "./index.html";
	}
}

function openPhotography(){
	if(screen.width <= screen.height){
		window.location.href = "../photography.html"; // eventually do a toggle here that mimicks on hover for mobile
	}else {
		window.location.href = "../photography.html";
	}

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
		if(noNewRows == false){
			newRow(1);
		}
	}
}
// Below is code for the portrait section or generic photo wall implementation
var docLoc
function newRow(amount){
	docLoc = document.location;
	docLoc = docLoc.toString();
	docLoc = docLoc.slice(58, -5);
	//console.log("image location = "+docLoc + "images/");
	var columns = 4;
	if(amount == 0){
		return;
	}


	if (docWidth < docHeight){ //mobile friendly ish
		columns = 2;
	}

	var container = document.getElementById("PortraitContainer");
	var div = document.createElement('div');
	div.setAttribute("class", "PhotoRowDiv");
	PortraitContainer.appendChild(div);

	//Insert images and styles here, replicate entire row styling
	var indiv = [];
	var image = [];
	var vignette = [];
	for(i = 1; i < (columns+1); i++){
		if((i+columns*imgRowCounter) > parseInt(dimensions[csvPortSplit1.length-1][0].slice(0,-2))){ // checks if past final image available
			if(i == 1){ // if first thrown fileNotAvailable is the first of the row, delete the new row
				div.parentNode.removeChild(div);
			}
			noNewRows = true; //create no future rows
			break;
		}
		indiv[i] = document.createElement('div');
		indiv[i].setAttribute("class", "PhotoIndiv");
		indiv[i].setAttribute("onclick", "imgFullscreen(this)");
		div.appendChild(indiv[i]);
		image[i] = document.createElement('img');
		image[i].setAttribute("class", "RowIMG");
		if((i+columns*imgRowCounter) > parseInt(dimensions[csvPortSplit1.length-1][0].slice(0,-2))){ //If image would be beyond what we have in array
			image[i].src = docLoc + "Images/imgArray1_1.jpg"; //FILE NOT FOUND ERROR AVOIDANCE, shouldn't happen anymore but just in case
		}else{
			image[i].src = docLoc + "Images/" + imgArray[(i+columns*imgRowCounter)] + ".jpg";  //images/imgArray#.jpg
		}
		indiv[i].appendChild(image[i]);
		vignette[i] = document.createElement('div');
		vignette[i].setAttribute("class", "vignette");
		indiv[i].appendChild(vignette[i]);

		if (columns == 2){
			//define 2 column page styling
			indiv[i].setAttribute("class", "PhotoIndivMobile");
		}
	}
	imgRowCounter++;
	amount--;
	newRow(amount);
}

var imgRowCounter = 0;
var imgArray = []
function imageArraySetup(){
	for(i = 1; i < 100; i++){ //number of images usable
		imgArray[i] = ("imgArray"+ i); // Creates a src name to be used in above row creation function
	}
		newRow(3);
}


var imageCounter = 0;
function imgFullscreen(div){
	
	var imgSource = div.getElementsByTagName('img')[0].src;
	imgSource = imgSource.slice(0, -4);
	nextImageSource = (imgSource + "_" + 2 + ".jpg");
	imgSource = (imgSource + "_" + 1 + ".jpg");
	//console.log(imgSource);

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


	var imgContainer = document.createElement('div');
	imgContainer.setAttribute("class", "imgFullContainer");
	fullscreenDiv.appendChild(imgContainer);

	var imgFull = document.createElement('img');
	imgFull.setAttribute("class", "imgFull");
	
	imgFull.src = imgSource; //remove the .jpg
	var tempsrc = imgSource.slice(0, -4);
	var tempsrc = tempsrc.slice(-3); //have to slice from beginning in order to account for double digits
	//var tempsrc = tempsrc.slice(54); //NEED LESS WHEN ON BROWSER HOSTING  MAy BE UNNECESSARY NOW THAT I SLICE ALL BUT LAST 3 IMPORTANT LETTERs
	var tempDimensions;
	//console.log(tempsrc);
	//console.log(dimensions[4][0]);
	for(i = 0; i <= dimensions.length; i++){
		if(dimensions[i][0] == undefined){
			break;
		}
		if(dimensions[i][0] == tempsrc){
			//console.log("working!");
			var width = dimensions[i][1];
			var height = dimensions[i][2];
			var deets = dimensions[i][3];
			var number = dimensions[i][4];
			var tempDimensions = resizeImg(width, height);
			break;
		}
	}
	
	imgContainer.style.height = tempDimensions[1] + "px";
	imgContainer.style.width = tempDimensions[0] + "px";
	imgContainer.style.marginLeft = tempDimensions[2] + "px";

	imgFull.setAttribute("onclick", "popBubbles");
	imgContainer.appendChild(imgFull);


	var arrowContainerR = document.createElement('div');
	arrowContainerR.setAttribute("class", "arrowContainerR");
	fullscreenDiv.appendChild(arrowContainerR);

	//if 1 of 1 then don't create button
	if(number !== "1 of 1"){
		var arrowR = document.createElement('button');
		arrowR.setAttribute("class", "arrows");
		arrowR.setAttribute("onclick", "nextImageArrow(this.parentNode.parentNode)")
		arrowR.innerText = ">";
		arrowContainerR.appendChild(arrowR);
	}

	checkImageBeyond(imgSource, nextImageSource, fullscreenDiv);
	imgDisplayDetails(tempDimensions[0],tempDimensions[1], deets);
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
	if (typeof containingDiv.childNodes[2].childNodes[1] !== "undefined"){ //removes the description for each image if it exists (should always exist)
		containingDiv.childNodes[2].removeChild(containingDiv.childNodes[2].childNodes[1]);
	}

	var initSrc = containingDiv.childNodes[2].childNodes[0].src;
	initSrc = initSrc.slice(0, -4);
	var lastChar = initSrc[initSrc.length -1];
	lastChar = parseInt(lastChar)+1;
	var nextImageChar = lastChar +1;
	nextImageChar = nextImageChar.toString();
	lastChar = lastChar.toString();

	initSrc = initSrc.slice(0, -1);
	var nextSrc = initSrc + nextImageChar;
	initSrc = initSrc + lastChar;
	var tempsrc = initSrc;
	initSrc = (initSrc + ".jpg");
	nextSrc = (nextSrc + ".jpg");
	checkImageBeyond(initSrc, nextSrc, containingDiv);

	var tempsrc = tempsrc.slice(-3); //have to slice from beginning in order to account for double digits
	//var tempsrc = tempsrc.slice(54); //NEED LESS WHEN ON BROWSER HOSTING
	var tempDimensions;
	for(i = 0; i <= dimensions.length; i++){
		if(dimensions[i][0] == undefined){
			break;
		}
		if(dimensions[i][0] == tempsrc){
			var width = dimensions[i][1];
			var height = dimensions[i][2];
			var deets = dimensions[i][3];
			var tempDimensions = resizeImg(width, height);
		}
	}


	containingDiv.childNodes[2].style.height = tempDimensions[1] + "px";
	containingDiv.childNodes[2].style.width = tempDimensions[0] + "px";
	containingDiv.childNodes[2].style.marginLeft = tempDimensions[2] + "px";

	imgDisplayDetails(tempDimensions[0],tempDimensions[1], deets);
}

function previousImageArrow(containingDiv){
	if (typeof containingDiv.childNodes[2].childNodes[1] !== "undefined"){
		containingDiv.childNodes[2].removeChild(containingDiv.childNodes[2].childNodes[1]);
	}
	imageCounter--;
	if(imageCounter == 0){
		var ArrowDiv = containingDiv.childNodes[1];
		ArrowDiv.removeChild(ArrowDiv.childNodes[0]);
	}
	var initSrc = containingDiv.childNodes[2].childNodes[0].src;
	initSrc = initSrc.slice(0, -4);
	var lastChar = initSrc[initSrc.length -1];
	lastChar = parseInt(lastChar)-1;
	var nextImageChar = lastChar -1;
	nextImageChar = nextImageChar.toString();
	lastChar = lastChar.toString();

	initSrc = initSrc.slice(0, -1);
	var nextSrc = initSrc + nextImageChar;
	initSrc = initSrc + lastChar;
	var tempsrc = initSrc;
	initSrc = (initSrc + ".jpg");
	nextSrc = (nextSrc + ".jpg");
	checkImageBeyond(initSrc, nextSrc, containingDiv); //nextSrc is global and gets updated by this

	var tempsrc = tempsrc.slice(-3); //have to slice from beginning in order to account for double digits
	//var tempsrc = tempsrc.slice(54); //NEED LESS WHEN ON BROWSER HOSTING
	var tempDimensions;
	for(i = 0; i <= dimensions.length; i++){
		if(dimensions[i][0] == undefined){
			break;
		}
		if(dimensions[i][0] == tempsrc){
			var width = dimensions[i][1];
			var height = dimensions[i][2];
			var deets = dimensions[i][3];
			var tempDimensions = resizeImg(width, height);
		}
	}


	containingDiv.childNodes[2].style.height = tempDimensions[1] + "px";
	containingDiv.childNodes[2].style.width = tempDimensions[0] + "px";
	containingDiv.childNodes[2].style.marginLeft = tempDimensions[2] + "px";

	if(noRightArrow){
		noRightArrow = false;
		var arrowR = document.createElement('button');
		arrowR.setAttribute("class", "arrows");
		arrowR.setAttribute("onclick", "nextImageArrow(this.parentNode.parentNode)")
		arrowR.innerText = ">";
		containingDiv.childNodes[3].appendChild(arrowR);
	}

	imgDisplayDetails(tempDimensions[0],tempDimensions[1], deets);
}

var noRightArrow = false;
function checkImageBeyond(imageSrc, nextSrc, containingDiv){
	var img = new Image();

	containingDiv.childNodes[2].childNodes[0].src = imageSrc;

	img.onerror = function(){
		lastChar = imageSrc.slice(0,-4);
		lastChar = lastChar[lastChar.length-1];
		lastChar = parseInt(lastChar);
		if(lastChar > 1){ // making sure it isn't triggering from previous arrow being clicked
			containingDiv = containingDiv.childNodes[3];
			containingDiv.removeChild(containingDiv.childNodes[0]);
			noRightArrow = true;
		}
	}
	img.src = nextSrc; // if this throws error, calls above function

}

function checkImgSrc(initialSrc, imageObj){
	var img = new Image();
	imageObj.src = initialSrc;

	img.onerror = function(){
		imageObj.src = "images/FileNotFound.jpg";
	}
	img.src = initialSrc;
}

function changeImage(imageSrc, containingDiv){
	var img = new Image();
	img.onload = function(){
		containingDiv.childNodes[2].childNodes[0].src = imageSrc;

	}
	img.onerror = function(){
		console.log("isn't valid");
		containingDiv = containingDiv.childNodes[3];
		containingDiv.removeChild(containingDiv.childNodes[0]);
		noRightArrow = true;
	}
	img.src = imageSrc;
}

function imgDisplayDetails(width, height, deets){ 
	var imgContainer = document.getElementById("activeFullscreen");
	imgContainer = imgContainer.childNodes[2];

	var descriptionDiv = document.createElement('div');
	var descriptionLines = [];
	descriptionDiv.setAttribute("class", "descriptionOverlayDiv");
	descriptionDiv.setAttribute("onclick", "popBubbles");
	imgContainer.appendChild(descriptionDiv);
	var detailedDeets = deets.split("$");

	for(i = 0; i < detailedDeets.length; i++){
		descriptionLines[i] = document.createElement('p');
		descriptionLines[i].setAttribute("style", ("font-size: " + .3*height/detailedDeets.length + "px"));
		descriptionLines[i].setAttribute("class", "innerDescription");
		descriptionLines[i].innerText = detailedDeets[i];
		descriptionDiv.appendChild(descriptionLines[i]);

	}
}

function popBubbles(){
	//below code stops event propogation (inside div onclick only, stops before outer div);
	console.log("testing");
	if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
}


var dimensions = [];
for (x = 0; x < 100; x++){
	dimensions[x] = [];
}

var csvPortSplit1;
var csvPortraits = "1_1,1 of 4,2560,1836,1 of 4$Editing Time: ~45m $Shutter Speed: 1/60s$Aperature: f/5.6 $ISO: 400|1_2,2 of 4,2560,1696,2 of 4$Editing Time: <30m $Shutter Speed: 1/80s $Aperature: f/5.6 $ISO: 200 |1_3,3 of 4,2560,1696,3 of 4$Editing Time: <30m $Shutter Speed: 1/60s $Aperature: f/4.8 $ISO: 400|1_4,4 of 4,2560,1696,4 of 4$Editing Time: <30m $Shutter Speed: 1/100s $Aperature: f/5.6 $ISO: 100|2_1,1 of 6,2560,1949,1 of 6$Editing Time: ~1hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_2,2 of 6,2560,2255,2 of 6$Editing Time: ~3hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_3,3 of 6,2560,2139,3 of 6$Editing Time: ~3hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500 |2_4,4 of 6,2560,1696,4 of 6$Editing Time: ~1hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500 |2_5,5 of 6,2560,1822,5 of 6$Editing Time: ~2hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_6,6 of 6,2560,3865,6 of 6$Editing Time: ~4hr $Shutter Speed: 1/125s $Aperature: f/4 $ISO: 640 |3_1,1 of 4,2560,2937,1 of 4$Editing Time: ~45m $Shutter Speed: 1/320s $Aperature: f/4.2 $ISO: 100|3_2,2 of 4,2560,4417,2 of 4$Editing Time: <30m $Shutter Speed: 1/100s $Aperature: f/4 $ISO: 400 |3_3,3 of 4,2560,2508,3 of 4$Editing Time: ~45m $Shutter Speed: 1/320s $Aperature: f/4.2 $ISO: 100|3_4,4 of 4,2560,3531,4 of 4$Editing Time: ~30m $Shutter Speed: 1/200s $Aperature: f/4 $ISO: 100|4_1,1 of 3,2560,1859,1 of 3$Editing Time: <30m $Shutter Speed: 1/320s $Aperature: f/4 $ISO: 800 |4_2,2 of 3,2560,1909,2 of 3$Editing Time: <30m $Shutter Speed: 1/320s $Aperature: f/4.5 $ISO: 800 |4_3,3 of 3,1583,3042,3 of 3$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/4.8 $ISO: 500 |5_1,1 of 3,2560,2885,1 of 3$Editing Time: ~45m $Shutter Speed: 1/160s $Aperature: f/4 $ISO: 400|5_2,2 of 3,2560,3063,2 of 3$Editing Time: ~1hr $Shutter Speed: 1/100s $Aperature: f/4 $ISO: 800 |5_3,3 of 3,2560,1696,3 of 3$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/4 $ISO: 100 |6_1,1 of 2,2560,1696,1 of 2$Editing Time: ~45m $Shutter Speed: 1/800s $Aperature: f/5.6 $ISO: 640|6_2,2 of 2,2560,4436,2 of 2$Editing Time: ~30m $Shutter Speed: 1/640s $Aperature: f/5.6 $ISO: 640 |7_1,1 of 3,2560,1763,1 of 3$Editing Time: <30m $Shutter Speed: 1/2000s $Aperature: f/5.6 $ISO: 400 |7_2,2 of 3,2560,1676,2 of 3$Editing Time: <30m $Shutter Speed: 1/2000s $Aperature: f/4.5 $ISO: 400|7_3,3 of 3,2560,1696,3 of 3$Editing Time: <30m $Shutter Speed: 1/1250s $Aperature: f/5 $ISO: 400 |8_1,1 of 1,2560,1911,1 of 1$Editing Time: ~45m $Shutter Speed: 1/25s $Aperature: f/14 $ISO: 500 |9_1,1 of 3,2560,2545,1 of 3$Editing Time: ~1hr $Shutter Speed: 1/800s $Aperature: f/3.5 $ISO: 400|9_2,2 of 3,2560,2545,2 of 3$Editing Time: ~8hr $Shutter Speed: 1/800s $Aperature: f/3.5 $ISO: 400|9_3,3 of 3,2308,2311,3 of 3$Editing Time: <30m $Shutter Speed: 1/1600s $Aperature: f/3.5 $ISO: 400|10_1,1 of 2,2560,1913,1 of 2$Editing Time: <30m $Shutter Speed: 1/1600s $Aperature: f/3.5 $ISO: 400|10_2,2 of 2,2560,2070,2 of 2$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/5.3 $ISO: 400 ";
var csvRetouching = "1_1,1 of 4,2560,1836,1 of 4$Editing Time: ~45m $Shutter Speed: 1/60s$Aperature: f/5.6 $ISO: 400|1_2,2 of 4,2560,1696,2 of 4$Editing Time: <30m $Shutter Speed: 1/80s $Aperature: f/5.6 $ISO: 200 |1_3,3 of 4,2560,1696,3 of 4$Editing Time: <30m $Shutter Speed: 1/60s $Aperature: f/4.8 $ISO: 400|1_4,4 of 4,2560,1696,4 of 4$Editing Time: <30m $Shutter Speed: 1/100s $Aperature: f/5.6 $ISO: 100|2_1,1 of 6,2560,1949,1 of 6$Editing Time: ~1hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_2,2 of 6,2560,2255,2 of 6$Editing Time: ~3hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_3,3 of 6,2560,2139,3 of 6$Editing Time: ~3hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500 |2_4,4 of 6,2560,1696,4 of 6$Editing Time: ~1hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500 |2_5,5 of 6,2560,1822,5 of 6$Editing Time: ~2hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_6,6 of 6,2560,3865,6 of 6$Editing Time: ~4hr $Shutter Speed: 1/125s $Aperature: f/4 $ISO: 640 |3_1,1 of 4,2560,2937,1 of 4$Editing Time: ~45m $Shutter Speed: 1/320s $Aperature: f/4.2 $ISO: 100|3_2,2 of 4,2560,4417,2 of 4$Editing Time: <30m $Shutter Speed: 1/100s $Aperature: f/4 $ISO: 400 |3_3,3 of 4,2560,2508,3 of 4$Editing Time: ~45m $Shutter Speed: 1/320s $Aperature: f/4.2 $ISO: 100|3_4,4 of 4,2560,3531,4 of 4$Editing Time: ~30m $Shutter Speed: 1/200s $Aperature: f/4 $ISO: 100|4_1,1 of 3,2560,1859,1 of 3$Editing Time: <30m $Shutter Speed: 1/320s $Aperature: f/4 $ISO: 800 |4_2,2 of 3,2560,1909,2 of 3$Editing Time: <30m $Shutter Speed: 1/320s $Aperature: f/4.5 $ISO: 800 |4_3,3 of 3,1583,3042,3 of 3$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/4.8 $ISO: 500 |5_1,1 of 3,2560,2885,1 of 3$Editing Time: ~45m $Shutter Speed: 1/160s $Aperature: f/4 $ISO: 400|5_2,2 of 3,2560,3063,2 of 3$Editing Time: ~1hr $Shutter Speed: 1/100s $Aperature: f/4 $ISO: 800 |5_3,3 of 3,2560,1696,3 of 3$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/4 $ISO: 100 |6_1,1 of 2,2560,1696,1 of 2$Editing Time: ~45m $Shutter Speed: 1/800s $Aperature: f/5.6 $ISO: 640|6_2,2 of 2,2560,4436,2 of 2$Editing Time: ~30m $Shutter Speed: 1/640s $Aperature: f/5.6 $ISO: 640 |7_1,1 of 3,2560,1763,1 of 3$Editing Time: <30m $Shutter Speed: 1/2000s $Aperature: f/5.6 $ISO: 400 |7_2,2 of 3,2560,1676,2 of 3$Editing Time: <30m $Shutter Speed: 1/2000s $Aperature: f/4.5 $ISO: 400|7_3,3 of 3,2560,1696,3 of 3$Editing Time: <30m $Shutter Speed: 1/1250s $Aperature: f/5 $ISO: 400 |8_1,1 of 1,2560,1911,1 of 1$Editing Time: ~45m $Shutter Speed: 1/25s $Aperature: f/14 $ISO: 500 |9_1,1 of 3,2560,2545,1 of 3$Editing Time: ~1hr $Shutter Speed: 1/800s $Aperature: f/3.5 $ISO: 400|9_2,2 of 3,2560,2545,2 of 3$Editing Time: ~8hr $Shutter Speed: 1/800s $Aperature: f/3.5 $ISO: 400|9_3,3 of 3,2308,2311,3 of 3$Editing Time: <30m $Shutter Speed: 1/1600s $Aperature: f/3.5 $ISO: 400|10_1,1 of 2,2560,1913,1 of 2$Editing Time: <30m $Shutter Speed: 1/1600s $Aperature: f/3.5 $ISO: 400|10_2,2 of 2,2560,2070,2 of 2$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/5.3 $ISO: 400 ";
var csvManipulated = "1_1,1 of 4,2560,1836,1 of 4$Editing Time: ~45m $Shutter Speed: 1/60s$Aperature: f/5.6 $ISO: 400|1_2,2 of 4,2560,1696,2 of 4$Editing Time: <30m $Shutter Speed: 1/80s $Aperature: f/5.6 $ISO: 200 |1_3,3 of 4,2560,1696,3 of 4$Editing Time: <30m $Shutter Speed: 1/60s $Aperature: f/4.8 $ISO: 400|1_4,4 of 4,2560,1696,4 of 4$Editing Time: <30m $Shutter Speed: 1/100s $Aperature: f/5.6 $ISO: 100|2_1,1 of 6,2560,1949,1 of 6$Editing Time: ~1hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_2,2 of 6,2560,2255,2 of 6$Editing Time: ~3hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_3,3 of 6,2560,2139,3 of 6$Editing Time: ~3hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500 |2_4,4 of 6,2560,1696,4 of 6$Editing Time: ~1hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500 |2_5,5 of 6,2560,1822,5 of 6$Editing Time: ~2hr $Shutter Speed: 1/250s $Aperature: f/4 $ISO: 500|2_6,6 of 6,2560,3865,6 of 6$Editing Time: ~4hr $Shutter Speed: 1/125s $Aperature: f/4 $ISO: 640 |3_1,1 of 4,2560,2937,1 of 4$Editing Time: ~45m $Shutter Speed: 1/320s $Aperature: f/4.2 $ISO: 100|3_2,2 of 4,2560,4417,2 of 4$Editing Time: <30m $Shutter Speed: 1/100s $Aperature: f/4 $ISO: 400 |3_3,3 of 4,2560,2508,3 of 4$Editing Time: ~45m $Shutter Speed: 1/320s $Aperature: f/4.2 $ISO: 100|3_4,4 of 4,2560,3531,4 of 4$Editing Time: ~30m $Shutter Speed: 1/200s $Aperature: f/4 $ISO: 100|4_1,1 of 3,2560,1859,1 of 3$Editing Time: <30m $Shutter Speed: 1/320s $Aperature: f/4 $ISO: 800 |4_2,2 of 3,2560,1909,2 of 3$Editing Time: <30m $Shutter Speed: 1/320s $Aperature: f/4.5 $ISO: 800 |4_3,3 of 3,1583,3042,3 of 3$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/4.8 $ISO: 500 |5_1,1 of 3,2560,2885,1 of 3$Editing Time: ~45m $Shutter Speed: 1/160s $Aperature: f/4 $ISO: 400|5_2,2 of 3,2560,3063,2 of 3$Editing Time: ~1hr $Shutter Speed: 1/100s $Aperature: f/4 $ISO: 800 |5_3,3 of 3,2560,1696,3 of 3$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/4 $ISO: 100 |6_1,1 of 2,2560,1696,1 of 2$Editing Time: ~45m $Shutter Speed: 1/800s $Aperature: f/5.6 $ISO: 640|6_2,2 of 2,2560,4436,2 of 2$Editing Time: ~30m $Shutter Speed: 1/640s $Aperature: f/5.6 $ISO: 640 |7_1,1 of 3,2560,1763,1 of 3$Editing Time: <30m $Shutter Speed: 1/2000s $Aperature: f/5.6 $ISO: 400 |7_2,2 of 3,2560,1676,2 of 3$Editing Time: <30m $Shutter Speed: 1/2000s $Aperature: f/4.5 $ISO: 400|7_3,3 of 3,2560,1696,3 of 3$Editing Time: <30m $Shutter Speed: 1/1250s $Aperature: f/5 $ISO: 400 |8_1,1 of 1,2560,1911,1 of 1$Editing Time: ~45m $Shutter Speed: 1/25s $Aperature: f/14 $ISO: 500 |9_1,1 of 3,2560,2545,1 of 3$Editing Time: ~1hr $Shutter Speed: 1/800s $Aperature: f/3.5 $ISO: 400|9_2,2 of 3,2560,2545,2 of 3$Editing Time: ~8hr $Shutter Speed: 1/800s $Aperature: f/3.5 $ISO: 400|9_3,3 of 3,2308,2311,3 of 3$Editing Time: <30m $Shutter Speed: 1/1600s $Aperature: f/3.5 $ISO: 400|10_1,1 of 2,2560,1913,1 of 2$Editing Time: <30m $Shutter Speed: 1/1600s $Aperature: f/3.5 $ISO: 400|10_2,2 of 2,2560,2070,2 of 2$Editing Time: <30m $Shutter Speed: 1/500s $Aperature: f/5.3 $ISO: 400 ";

function csvSetup(csvChoice){
	csvPortSplit1 = csvChoice.split("|");
	var csvPortSplit2;

	for(i = 0; i <= csvPortSplit1.length; i++){
		if (csvPortSplit1[i] == undefined){
			break;
		}
		csvPortSplit2 = csvPortSplit1[i].split(",");

		dimensions[i][0] = csvPortSplit2[0];
		dimensions[i][1] = csvPortSplit2[2];
		dimensions[i][2] = csvPortSplit2[3];
		dimensions[i][3] = csvPortSplit2[4];
		dimensions[i][4] = csvPortSplit2[1];
	}
}

function resizeImg(width, height){
	var browserW = docWidth;
	var browserH = docHeight;
	var adjustment;
	var maxW = (.91*browserW - .91*.15*browserW);

	var maxH = (.9*browserH - .9*.1*browserH -.1); 

	if((width <= maxW) && (height <= maxH)){ //fit to container if smaller than both
		adjustment = (maxW - width) / width;
		width = (1+adjustment)*width;
		hieght = (1+adjustment)*height;
	}
	if(width > maxW){
		adjustment = (width - maxW) / width;
		width = maxW;
		height = height - (height*adjustment) - .001;
	}
	if(height > maxH){
		adjustment = (height - maxH) / height;
		width = width - (width*adjustment) - .001;
		height = maxH;
	}

	var tempDimensions = [];
	tempDimensions[0] = width;
	tempDimensions[1] = height;
	if(width < maxW){
		tempDimensions[2] = (maxW-width)/2;
		tempDimensions[3] = 0;
	}else if(height < maxH){
		tempDimensions[3] = (maxH-height)/2;
		tempDimensions[2] = 0;
	}
	return tempDimensions;
	//returns [width, height, margin width, margin height]
}


function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}