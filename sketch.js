var hypnoticBall,database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);// width,height
    hypnoticBall = createSprite(250,250,20,20);
    hypnoticBall.shapeColor = "red";

var hypnoticBallPosition=database.ref("ball/position");
hypnoticBallPosition.on("value",readPosition);
}

function draw(){
    background("green");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
       "x" :position.x + x,    //250-1=249-1=248+1=249
       "y" : position.y + y,    //250-1=249-1=248
    })
  
}


function readPosition(data){
    position=data.val();
    hypnoticBall.x=position.x;
    hypnoticBall.y=position.y;
}