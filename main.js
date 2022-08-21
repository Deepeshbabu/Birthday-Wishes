var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
block_image_object = "BirthdayImage.jpg" ;

var background = new Image();
background.src = "BirthdayImage.jpg";
background.onload = function()
{
    document.getElementById("myCanvas").getContext("2d").drawImage(background,0,0) ;   
}

function new_image()
{
	
    fabric.Image.fromURL(block_image_object, function(Img)
    {
        block_image_object.scaleToWidth(700) ;
        block_image_object.scaleToHeight(510) ;
        block_image_object.set({
            top : 0, 
            left : 0
        })
        canvas.add(block_image_object) ;
    }) ;
	
}

function playSound()
{
    x.play() ;
}

/* 

*/ 