var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var world,engine;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world

  ground= new Ground(240,800,480,10)

  for (var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }

  for (var k=15; k<=width-10; k=k+50){
    plinkos.push(new Plinko(k,175,10))
  }

  for (var k=40; k<=width-10; k=k+50){
    plinkos.push(new Plinko(k,275,10))
  }

  for (var k=15; k<=width-10; k=k+50){
    plinkos.push(new Plinko(k,375,10))
  }

  Engine.run(engine);
}

function draw() {
  background(0);  

 ground.display();
for (var k=0;k<divisions.length;k++){
  divisions[k].display();
}

for (var k=0;k<plinkos.length;k++){
  plinkos[k].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}

for (var k=0;k<particles.length;k++){
  particles[k].display();
}

}