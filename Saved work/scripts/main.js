window.onload = function() {navbarSticky()};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function navbarSticky() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

function expandContent(buttonID){
	var currentButton = buttonID;
	var expandables;
	expandables = document.getElementsByClassName("expandables");
	for (var i=0; i < expandables.length; i++){
		if(expandables[i].id == (currentButton+"_expanded")){
			var expand = expandables[i].id;
			var placeholder = (currentButton+"_placeholder");
		}
	}
	
	if (document.getElementById(expand).style.display == "inline-block"){
		document.getElementById(expand).style.display = "none";
		document.getElementById(placeholder).style.display = "inline-block"
	} else if (document.getElementById(expand).style.display == "none"){
		document.getElementById(expand).style.display = "inline-block";
		document.getElementById(placeholder).style.display = "none";
	}


}

function openAbout(){
	hidePages();
	scrollTop();
	document.getElementById("About").style.display = "block";
}

function openPreviousWorks(){
	hidePages();
	scrollTop();
	document.getElementById("PreviousWorks").style.display = "block";
	
}

function openResume(){
	hidePages();
	scrollTop();
	document.getElementById("Resume").style.display = "block";
	
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