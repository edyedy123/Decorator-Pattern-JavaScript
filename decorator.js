function Label(labelText,x,y){
	this.that = {};
	this.width_ = labelText.length*10;
	this.height_ = 40;

	this.that.draw = function(){
		strokeWeight(1);
		stroke(0,0,0);
		fill(0,0,0);
		textAlign(CENTER,CENTER);
		text(labelText,x,y);	

	}
	//console.log(that);
	return that;
};


function Border(labelText,x,y,add) {
 	Label.call(this, labelText,x,y);
 	width_=width_+add;
 	height_=height_+add;
 	console.log(add);
    this.draw = function(){
		rectMode(CENTER);
		strokeWeight(1);
		stroke(0,0,0);
		noFill();
		rect(x,y,width_,height_);	
	};
	return this;
}

function Thick(labelText,x,y) {
 	Label.call(this, labelText,x,y);
 	width_=width_+add;
 	height_=height_+add;
    this.draw = function(){
		rectMode(CENTER);
		strokeWeight(3);
		stroke(0,0,0);
		noFill();
		rect(x,y,width_,height_);	
	};
	return this;
}

function Dots(labelText,x,y) {
 	Label.call(this, labelText,x,y);
 	width_=width_+add;
 	height_=height_+add;
    this.draw = function(){
		ellipseMode(CENTER);
		strokeWeight(1);
		fill(255,0,0);
		stroke(255,0,0);
		//above label
		for(var i=0;i<width_/10 + 1;i++){
			ellipse((x-width_/2+i*10),(y-height_/2),5,5);
		}
		//below label
		for(var i=0;i<width_/10 +1;i++){
			ellipse((x-width_/2+i*10),(y+height_/2),5,5);
		}
		//left of label
		for(var i=0;i<height_/10-1;i++){
			ellipse((x-width_/2),(y-height_/2+((i+1)*10)),5,5);
		}
		//right of label
		for(var i=0;i<height_/10-1;i++){
			ellipse((x+width_/2),(y-height_/2+((i+1)*10)),5,5);
		}
	};
	return this;
}

function removeLast(labelText,x,y) {
 	Label.call(this, labelText,x,y);
 	width_=width_+add;
 	height_=height_+add;
    this.draw = function(){
		rectMode(CENTER);
		strokeWeight(10);
		stroke(color(255,255,255));
		noFill();
		rect(x,y,width_,height_);	
	};
	return this;
}

var l;
var add = 0;
var thickBorderButton;
var borderButton;
var dotButton;
var removeButton;
function addBorder(){
	add += 20;
	l = Border("the Label", 200,200,add);
}
function addThick(){
	add += 20;
	l = Thick("the Label", 200,200);
}
function addDots(){
	add += 20;
	l = Dots("the Label", 200,200);
}

function Remove(){
	l = removeLast("the Label", 200,200);
	if(add>20){
		add -= 20;
	}
	
}

function setup(){
    thickBorderButton=createButton("Add Thick Border");
    thickBorderButton.mousePressed(addThick);
    borderButton=createButton("Add Border");
    borderButton.mousePressed(addBorder);
    dotButton=createButton("Add Dots Border");
    dotButton.mousePressed(addDots);
    removeButton=createButton("Remove Last");
    removeButton.mousePressed(Remove);

	createCanvas(500,500);
	l = Label("the Label", 200,200);
}

function draw(){
	background(255,255,255);
	l.draw();
}
	