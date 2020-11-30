var gameState=0
var form
var game,question
var questions=[]
var database




function setup() 
{

    canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  form=new Form()
 // game = new Game();
  //game.getState();
  //game.start();


    
}

function draw() 
{

    form.display()



    
}