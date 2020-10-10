var car, wall;

var speed, weight;

function setup() {
  createCanvas(1200,200);

  //random speed and weight for car
  speed = random(55,90);
  weight = random(400,1500);

  //four car's sprites created
  car = createSprite(200,75,30,15);
  car.velocityX = speed;
  car.shapeColor = color(255);

  wall = createSprite(900,75,30,60);
  wall.shapeColor = color(255);
}

function draw() {
  background(0);
  
  if(wall.x - car.x < (wall.width/2)+(car.width/2)){
    car.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed)/2250;
    //console.log(deformation1);

    if(deformation < 1000){
      car.shapeColor = color(0,255,0);
    }
    else if((deformation > 1000)&&(deformation < 1500)) {
      car.shapeColor = color(230,230,0);
    }
    else if(deformation > 1500) {
      car.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}