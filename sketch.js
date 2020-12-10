const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var particles = []
var plinkos = []
var divisions = []
var divisionsHeight = 300
var score = 0
var particle
var turn = 0
var gameState = "play"
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,580,800,20);
    

    for(var k = 0;k<=width;k = k + 80){
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight))
    }
    for(var j = 40;j <=width;j=j+50){

plinkos.push(new Plinko(j,75))
 }
for(var j = 15;j <=width;j=j+50){

plinkos.push(new Plinko(j,125))
          }
 for(var j = 40;j <=width;j=j+50){

 plinkos.push(new Plinko(j,175))
                }
for(var j = 15;j <=width;j=j+50){

plinkos.push(new Plinko(j,225))
                      }
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  ground.display();

text("500",30,300)
text("500",110,300)
text("500",190,300)
text("500",270,300)
text("100",350,300)
text("100",430,300)
text("100",510,300)
text("200",590,300)
text("200",670,300)
text("200",750,300)


  for(var j = 0;j<particles.length;j++){

particles[j].display()
  }
  for(var k = 0;k<plinkos.length;k++){

    plinkos[k].display()
      }
      for(var i = 0;i<divisions.length;i++){

        divisions[i].display()
          }
          if(particle!==null){
particle.display();
if(particle.body.position.y>290){
if(particle.body.position.x>300){
  score = score+500
particle = null
if(turn>=5)
gameState = "end"
}
if(particle.body.position.x<550&&particle.body.position.x>301){
  score = score+100
particle = null
if(turn>=5)
gameState = "end"
}
if(particle.body.position.x>551&&particle.body.position.x<600){
  score = score+200
particle = null
if(turn>=5)
gameState = "end"
}

}
          }
          

}
function mousePressed(){
if(gameState!=="end"){

turn++
particle = new Particle(mouseX,10,10,10)
}


}