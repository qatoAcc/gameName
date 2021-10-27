// P.S. o-o i commented a lot because my two brain cells needed to know everthing

/************************************************
space for outside of scenes and mouse interaction
************************************************/
  var button = ["start :)","settings","about","Roll !"]; // words
  
//when mouse clicks start, go to game
  var currentScene;
  var Color =  ["CORAL", "LAVENDER", "DEFAULT", "TURQOISE"];
  var textBack = ["BACK"];
/***********************
BUTTONS & TITLE + SCENES
***********************/

var Scene1 = function(){  //first scene 
    currentScene = 1;
    
    background(255, 247, 247);
    
    fill(8, 7, 7);
    textSize(30);
    text(button[3], 155, 109);
    
    noStroke();
    fill(153, 242, 166);
    rect(70,173,248,38); //button shape for start
    
    fill(0, 0, 0);
    textSize(20);
    text(button[0], 170 , 198); //start text
    
    fill(133, 129, 133);
    rect(70,244,248,38); //shape for settings
    
    fill(0, 0, 0);
    textSize(20);
    text(button[1], 155, 268); //settings
    
    fill(239, 242, 138);
    rect(70,314,248,38); // about
    
    fill(0, 0, 0);
    text(button[2], 167, 338); //about text
    };
    Scene1();
    
    var SceneStart = function(){ //scene 2 / game start
    currentScene = 2;
    background(255,255,255);
    };
    
    var SceneSettings = function(){ //settings/accessability
    currentScene = 3;
    background(245, 244, 206);
    
    fill(0, 0, 0);
    text("PICK YOUR COLOR", 118, 33);
    
    fill(250, 185, 185); // color choice #1; coral
    rect(40,61,37,38);
    
    fill(3, 3, 3);
    text(Color[0], 26, 136); //label
    
    fill(245, 174, 245);
    rect(145, 61, 37, 38); //color choice #2; lavender
    
    fill(0, 0, 0);
    text(Color[1], 110, 136);
    
    rect(40, 175, 39, 41);
    fill(255, 255, 255);
    rect(40, 175, 37, 38 ); //color choice #3; default
    fill(0,0,0);
    rect(40, 175, 22, 3);
    
    fill(0, 0, 0);
    text(Color[2], 20, 254);
    
    fill(136, 252, 248);
    rect(145, 175, 37, 38); //color choice #4; turqoise
    
    fill(0,0,0);
    text(Color[3], 115, 254);
    
    fill(252, 249, 249);
    rect(47,321,59,43);
    
    textSize(14);
    fill(0, 0, 0);
    text(textBack[0], 57, 349);
    };
    
    
    
    var SceneAbout = function(){ //about/message from yours truly
    currentScene = 4;
    background(245, 204, 204);
    
    fill(5, 4, 4);
    textSize(30);
    text("ABOUT THE GAME:", 53, 65);
   
    textSize(15);
    text("enter description here o-o", 53, 115);
    
    textSize(20);
    text("message from yours truly:", 53, 237);
    
    fill(252, 249, 249);
    rect(51,348,62,33);
    
    fill(3, 3, 3);
    textSize(10);
    text(textBack[0], 69, 367);
    };

/****************
mouse _-_-_-_-_-_
-_-_-_interaction
****************/

  mouseClicked = function(){
if(mouseX > 70 && mouseX < 318 && mouseY > 173 && mouseY < 211 && currentScene === 1){
    SceneStart();
} 
else if(mouseX > 70 && mouseX < 318 && mouseY > 244 && mouseY < 278 && currentScene === 1){
    SceneSettings();
} 
else if(mouseX > 70 && mouseX < 318 && mouseY > 314 && mouseY < 352 && currentScene === 1){
    SceneAbout();
}
else if(currentScene === 4 && mouseX >= 51 && mouseX <= 113 && mouseY >= 348 && mouseY <= 381){
    Scene1();
}
else if(currentScene === 3 && mouseX > 47 && mouseX < 106 && mouseY > 321 && mouseY < 364){
    Scene1();
}

};




