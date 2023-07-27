var divArray = new Array();
var divNumber=0;
var imagePadding=0;
var animationSpeed=800;  //this is the speed of the animation
var waitInterval=5000;


var currentImage=1;

//*********Please change these settings if you have made some changes in the HTML or CSS files!************
var imageWidth=486;   //this is the width of a single image

var timer=-1;

$(function(){
getAllDivs();

setDefaultWidth();
setSlider();

timer = window.setInterval("moveLeft()", waitInterval);
});

/**
 *	Gets all the divs that have to be shown in the slider and fills them in an array.
 */
function getAllDivs(){
	//fill the divs in an array
	$(".imageHolder").each(function(i){
		divArray[i]=$(this);
		divNumber++;
	});
}

/**
 *	Moves the image wrapper to the right.
 */
function moveRight(){
	if(currentImage>1){
		$(".wrapper ul").animate({marginLeft:"+="+animationLength}, animationSpeed);
		currentImage--;
		window.clearInterval(timer);
		timer=window.setInterval("wait()", waitInterval);
	}
}

function wait(){
	window.clearInterval(timer);
	timer=window.setInterval("moveLeft()", waitInterval);
}

/**
 *	Moves the image wrapper to the left.
 */
function moveLeft(){
	if(currentImage<divNumber){
		$(".wrapper ul").stop().animate({marginLeft:-animationLength*(currentImage)}, animationSpeed);
		currentImage++;
	}else{
		$(".wrapper ul").stop().animate({marginLeft:0}, animationSpeed);
		currentImage=1;
	}
}


/**
 *	This is the main function. It sets click event handlers to the arrows to animate the divs.
 */
function setSlider(){
	
	//set a click event handler for the right gradient 
	$("#rightArrow").click(function(){	
		moveLeft();
		window.clearInterval(timer);
		timer=window.setInterval("wait()", waitInterval);
	});
	
	//set a click event handler for the left gradient
	$("#leftArrow").click(function(){	
		moveRight();
	});
	
	$("#rightArrow").mouseover(function(){	
		$("#rightArrow").css({cursor:"pointer"});
	});
	
	$("#leftArrow").mouseover(function(){	
		$("#leftArrow").css({cursor:"pointer"});
	});
}

/**
 *	Sets the width of a single div and the width of the div wrapper.
 */
function setDefaultWidth(){
	var allDivsWidth=0;	
	
	imagePadding=0;
	$(".imageHolder").css({paddingLeft:imagePadding+"px", paddingRight:imagePadding+"px"});
	allDivsWidth=divNumber*(2*imagePadding+imageWidth+2);
	
	//set the width of the wrapper div
	$(".wrapper ul").css({width:allDivsWidth+"px"});
	
	var marginLeft=0;
	
	//initial position of the images
	$(".wrapper ul").animate({marginLeft:"-="+marginLeft},1);
	
	animationLength=imageWidth;
}