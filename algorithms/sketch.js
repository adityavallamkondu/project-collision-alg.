
var fixedRect, movingRect;
 function setup() { 
   createCanvas(800,400); 
   fixedRect=createSprite(200,150,50,70); 
   fixedRect.shapeColor= 'blue'; 
   movingRect= createSprite(250,100,70,50); 
   movingRect.shapeColor= 'blue'; 
  } 
   function draw() { 
     background(0); 
     movingRect.x=World.mouseX; 
     movingRect.y= World.mouseY; 
     if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x <fixedRect.width/2+movingRect.width/2 &&
      movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 && fixedRect.y-movingRect.y <fixedRect.height/2+movingRect.height/2){ 
       fixedRect.shapeColor= 'yellow'; 
       movingRect.shapeColor= 'yellow'; 
       
      }
      else { 
        fixedRect.shapeColor= 'blue'; 
        movingRect.shapeColor= 'blue'; 
        } 
      drawSprites(); 
    }
