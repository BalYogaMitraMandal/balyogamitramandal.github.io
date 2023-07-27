var currentPosition;
var currentSize;

var padding=11;   //this is the padding for each menu item
var topOffset=15;
var speed=500;
var initialOffset=5;   //this is the offset of the first anchor of the menu from the beginning of the menu without the padding


$(function(){
	setSquareDefaultPosition();
	setMenuHover();
});


/**
 *	This is the main function. It handles the mouseover, mouseleave and click events on the menu.
 */
function setMenuHover(){

	//handle the mouseover event
	$("#menuUl li").mouseover(function(){
		hover($(this));
	});
	
	//handle the click event
	$("#menuUl li").click(function(){
		currentPosition=getCurrentLeft($(this));
		currentSize=$(this).find("a").width()+padding;
	});
	
	//handle the mouseleave event
	$("#menuUl").bind("mouseleave",function(){
      setDefaultHover();
    });

}

/**
 *	Hovers a menu element. Makes the hover square go over the specified element.
 *  var element - the element to be hovered
 */
function hover(element){
	var square=$("#hoverSquare");
	
	//if the hover square is currently animated, stop it
	if(square.is(":animated")){
		square.stop();
	}
		
	positionLeft=getCurrentLeft(element);

	//move the square
	var width=element.find("a").width()+padding;
	square.animate({left:positionLeft, "width":width}, speed);
}

/**
 *	Gets the left offset of the anchor of the specified element.
 */
function getCurrentLeft(element){
	//get the left position of the hovered menu item
	var positionLeft=element.find("a").offset().left+topOffset;
		
	var parentLeft=element.parent().offset().left;
	positionLeft=positionLeft-parentLeft-padding;
	
	return positionLeft;
}

/**
 *	Sets the default position of the hover square. 
 *  This is the position of the currently selected menu item.
 */
function setDefaultHover(){
	var square=$("#hoverSquare");
	
	//if the hover square is currently animated, stop it
	if(square.is(":animated")){
		square.stop();
	}

	square.css({position:"absolute"});
	//move the square
	square.animate({left:currentPosition, "width":currentSize}, speed);
}

/**
 *	Sets the default position of the square. 
 *	This is the position of the current element when the page is loaded.
 */
function setSquareDefaultPosition(){
	var currentItemClicked=document.getElementById("pageIndex").value;
	var first=$("#menuUl li:eq("+currentItemClicked+")");

	var positionLeft=initialOffset;
	for(var i=0; i<currentItemClicked; i++){
		positionLeft+=$("#menuUl a:eq("+i+")").width()+2*padding;
	}
	
	currentPosition=positionLeft;
	currentSize=first.find("a").width()+padding;
	$("#hoverSquare").css({left:currentPosition, "width":currentSize});	
}

