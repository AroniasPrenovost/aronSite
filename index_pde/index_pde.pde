
 int mX, mY, line;    //global variable initialization

void setup() {       
  size(640, 480);   
   background(300);
  noFill();
  smooth();
  
}

void draw() {
  
 
  
   mX = mouseX;      
  mY = mouseY;      

 // somehow get it to display horizontal 
  stroke(random(150), random(0), random(100));
  line(random(mouseX), random(mouseX), width, height); 




}