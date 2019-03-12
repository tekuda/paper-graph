

var grid,joe;

var duration=0;
function setup() {
    createCanvas(501, 501);
    resetEverything();
}

function mousePressed() {
    //vehicles.setTarget(createVector(mouseX,mouseY));
    //snake.move();
    //resetEverything();
//    if (mouseX>0&&mouseX<width&&mouseY>0&&mouseY<height){
//        if (mouseButton==LEFT){
//            grid.cellClicked(Math.floor(mouseX/(width/10)),Math.floor(mouseY/(height/10)));
//        }else{
//            grid.cellRightClicked(Math.floor(mouseX/(width/10)),Math.floor(mouseY/(height/10)));    
//        }
//    }
}
function keyPressed() {

}

function moveUp() {
    joe.moveUp();
    var img = document.createElement("img");
    img.src = "arrow-up.png";
    img.width = "30";
    img.height = "30";
    document.getElementById('algorithm').appendChild(img);
}

function moveDown() {
    joe.moveDown();
    var img = document.createElement("img");
    img.src = "arrow-down.png";
    img.width = "30";
    img.height = "30";

    document.getElementById('algorithm').appendChild(img);

}
function moveLeft() {
    joe.moveLeft();
    var img = document.createElement("img");
    img.src = "arrow-left.png";
    img.width = "30";
    img.height = "30";

    document.getElementById('algorithm').appendChild(img);

}
function moveRight() {
    joe.moveRight();
    var img = document.createElement("img");
    img.src = "arrow-right.png";
    img.width = "30";
    img.height = "30";

    document.getElementById('algorithm').appendChild(img);
}
function fillSquare() {
    grid.fillSquare(joe.x,joe.y);
    var img = document.createElement("img");
    img.src = "square.png";
    img.width = "30";
    img.height = "30";

    document.getElementById('algorithm').appendChild(img);
}


function draw() {
    grid.show();
    joe.update();
}
function resetEverything(){
    grid=new Grid(4,4,80);
    joe=new Joe(4,4,80);
}


