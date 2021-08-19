//assinging the names to the variables

var jaxon, jaxon_animation;
var path, invisiblePath_1, invisiblePath_2, path_image;
var edges;

function preload()
   {

      //pre-load images & animation

      jaxon_animation = loadAnimation("Runner-1.png","Runner-2.png"); 

      path_image = loadImage("path.png"); 

   }

function setup()
   {
 
      //creating the canvas

      createCanvas(300,600);

      //making the edges as sprites
      
      edges = createEdgeSprites();

      //creating the sprites and adding the image and animation

      //creating the path

      path = createSprite(width/2,300,width,50);
      path.addImage("moving",path_image);
      path.velocityY = 5;

      //creating jaxon

      jaxon = createSprite(width/2,300,50,50);
      jaxon.addAnimation("running",jaxon_animation);
      jaxon.scale = 0.1;

      //creating the left and right invisible boundries 

      //making the invisiblePath_1

      invisiblePath_1 = createSprite(275,300,50,600);
      //invisiblePath_1.visible = false;
      
      //making the invisiblePath_2

      invisiblePath_2 = createSprite(20,300,50,600);
      //invisiblePath_2.visible = false;

   }

function draw()
   {

     //assinging the background color

     background("brown");

     //reset the path's background

     if(path.y > 500)
       {
         path.y = height/2;
       } 

     //making jaxon mirror the mouse position

      jaxon.x = mouseX;

     //making jaxon collide with the invisible paths

     jaxon.collide(invisiblePath_1);
     jaxon.collide(invisiblePath_2);

      drawSprites(); 
 
   }
