var w1, w2, w3, w4 ;

var b1, b2, b3, b4 ;


function setup() {
  createCanvas(430,400);
  
   w1 = createSprite(49,8,70,15);     

   w2 = createSprite(157,8,70,15);
 
   w3 = createSprite(260,8,70,15);
 
   w4 = createSprite(365,8,70,15);
 
 
   b1 = createSprite(49,307,15,24);
 
   b2 = createSprite(157,307,15,24);
 
   b3 = createSprite(260,307,15,24);
  
   b4 = createSprite(365,307,15,24); 
 

      w1.shapeColor  = "white"; 
      w2.shapeColor  = "white"; 
      w3.shapeColor  = "white"; 
      w4.shapeColor  = "white"; 


      b1.shapeColor = "orange";
      b2.shapeColor = "orange";
      b3.shapeColor = "orange";
      b4.shapeColor = "orange";


       b1.velocityY = -56;     
       b2.velocityY = -56; 
       b3.velocityY = -56; 
       b4.velocityY = 0-56; 



}


function draw() {

  background("black");
  
  
  if (b1.collide(w1)) {
    w1.shapeColor = "lightgreen";
  } 
 
  
      if (b2.collide(w2)) {
    w2.shapeColor = "red";
    
  } 
  
 

  if (b3.collide(w3)) {
    w3.shapeColor = "lightgreen";
    
  } 
  
 

  if (b4.collide(w4)) {
    w4.shapeColor = "lightgreen" ;
       
  }  


 
  drawSprites();



}
