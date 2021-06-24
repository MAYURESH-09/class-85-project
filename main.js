canvas = document.getElementById("myCanvas")  ;
ctx= canvas.getContext("2d")  ;

car_height = 90 ;
car_width = 100 ;

car_x = 150 ;
car_y = 180 ;

background_image = "racing.jpg" ;
rover_image = "car1.png" ;

 function add() 
 {
     background_image_tag = new Image();
     background_image_tag.onload = show_image ;
     background_image_tag.src = background_image ; 

     background_car_tag = new Image();
     background_car_tag.onload = show_image_ROVER ;
     background_car_tag.src = rover_image ;

     background_car_tag = new Image();
     background_car_tag.onload = show_image_rover ;
     background_car_tag.src = rover_image ; 
 }

 function show_image ()
 {
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height) ;
 }

 function show_image_rover ()
 {
    ctx.drawImage(background_car_tag,car_x,car_y,car_width,car_height) ;
 }

 function show_image_ROVER ()
 {
    ctx.drawImage(background_car_tag,200, 250,car_width,car_height) ;
 }

window.addEventListener("keydown",my_key_down) ;

function my_key_down (e)
{
     keyPressed=e.keyCode ;
     console.log(keyPressed)

     if ( keyPressed =="38" )
     {
         console.log("up key is pressed") ;
         up_rover()
     }
     if ( keyPressed =="40" )
     {
         console.log("down key is pressed") ;
         down_rover()
     }
     if ( keyPressed =="37" )
     {
         console.log("left key is pressed") ;
         left_rover()
     }
     if ( keyPressed =="39" )
     {
         console.log("right key is pressed") ;
         right_rover()
     }
}
function up_rover()
{
    if( car_y > 0 )
    {
        car_y = car_y-10 ;
        console.log("up key is pressed cureent x and y co-ordinates are" + car_x +car_y) ;
        show_image() ;
        show_image_rover() ;
    }
}
function down_rover()
{
    if( car_y <= 500 )
    {
        car_y = car_y+10 ;
        console.log("down key is pressed cureent x and y co-ordinates are" + car_x +car_y) ;
        show_image() ; 
        show_image_rover() ;
    }
}
function left_rover()
{
    if( car_x >= 0 )
    {
        car_x = car_x-10 ;
        console.log("left key is pressed cureent x and y co-ordinates are" + car_x +car_y) ;
        show_image() ;
        show_image_rover() ;
    }
}
function right_rover()
{
    if( car_x <=700 )
    {
        car_x = car_x+10 ;
        console.log("right key is pressed cureent x and y co-ordinates are" + car_x +car_y) ;
        show_image() ;
        show_image_rover() ;
    }
}

function win()
{
    if(car_x>700)
    {
        console.log("Car 1 has won")
        document.getElementById("status").innerHTML = "Car won"
    }
}