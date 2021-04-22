canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
car1_width = 130;
 car1_height = 90;
 car2_width = 130;
 car2_height = 90;
  background_image = "racing.jpg";
   car1_image = "car1.png";
    car1_x = 10;
     car1_y = 10;

     car2_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m8AhttzdoG5iIM1RD7GARXuUA3ODwBQcOXuskMJ2Nbggn9pkckRPmcQjuJa4Iks_nL4&usqp=CAU";
    car2_x = 10;
     car2_y = 150;

     function add() {
          background_imgTag = new Image(); 
          //defining a variable with a new image
           background_imgTag.onload = uploadBackground; 
           // setting a function, onloading this variable 
           background_imgTag.src = background_image;
            // load image
             car1_imgTag = new Image(); 
             car2_imgTag = new Image();
             //defining a variable with a new image
              car1_imgTag.onload = uploadcar1; 
              car2_imgTag.onload = uploadcar2; 
              // setting a function, onloading this variable 
              car1_imgTag.src = car1_image;  
             car2_imgTag.src = car2_image; 
              // load image
             }

function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
}

function uploadcar1() {
     ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
     } 

     function uploadcar2() {
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
        } 

        window.addEventListener("keydown", my_keydown);
     
        function my_keydown(e) { 
            keyPressed = e.keyCode;
             console.log(keyPressed);
            
if(keyPressed == '38') 
{ 
    car1_up();
     console.log("up_arrow_key");
     } 
     
     if(keyPressed == '40') 
     { 
         car1_down();
          console.log("down_arrow_key");
         }
         
         if(keyPressed == '37') 
         { 
             car1_left();
              console.log("left_arrow_key");
         }
 

 if(keyPressed == '39')
 { 
     car1_right(); 
     console.log("right_arrow_key");
    } 




    if(keyPressed == '87') 
{ 
    car2_up();
     console.log("key_w");
     } 
     
     if(keyPressed == '83') 
     { 
         car2_down();
          console.log("key_s");
         }
         
         if(keyPressed == '65') 
         { 
             car2_left();
              console.log("key_a");
 } 
 
 if(keyPressed == '68')
  { 
      car2_right(); 
      console.log("key_d");
     } 
     }


  
    function car1_up()
     { if(car1_y >=0)
         { car1_y = car1_y - 10; 
            console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car2_y);
             uploadBackground();
              uploadcar1();
             } 
            } 
            
            function car1_down() 
            { 
                if(car1_y <=500) 
                {
                     car1_y =car1_y+ 10;
                      console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
                      uploadBackground();
                       uploadcar1(); 
                    }
                 }
                 
                 function car1_left() 
                 { 
                     if(car1_x >= 0) 
                     { car1_x =car1_x - 10; console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
                     uploadBackground();
                      uploadcar1(); 
                    } 
                }

function car1_right() 
{ 
    if(car1_x <= 700) 
    {
         car1_x =car1_x + 10;
          console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
           uploadBackground();
            uploadcar1() ; 
        }
     }


     function car2_up()
     { if(car2_y >=0)
         { car2_y = car2_y - 10; 
            console.log("When w key is pressed, x = " + car2_x + " | y = " +car2_y);
             uploadBackground();
              uploadcar2();
             } 
            } 
            
            function car2_down() 
            { 
                if(car2_y <=500) 
                {
                     car2_y =car2_y+ 10;
                      console.log("When s key is pressed, x = " + car2_x + " | y = " +car2_y); 
                      uploadBackground();
                       uploadcar2(); 
                    }
                 }
                 
                 function car2_left() 
                 { 
                     if(car2_x >= 0) 
                     { car2_x =car2_x - 10; console.log("When a key is pressed, x = " + car2_x + " | y = " +car2_y); 
                     uploadBackground();
                      uploadcar2(); 
                    } 
                }

function car2_right() 
{ 
    if(car2_x <= 700) 
    {
         car2_x =car2_x + 10;
          console.log("When d key is pressed, x = " + car2_x + " | y = " +car2_y);
           uploadBackground();
            uploadcar2() ; 
        }
     }