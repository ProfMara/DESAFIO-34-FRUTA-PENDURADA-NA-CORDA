const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}

function setup(){
    createCanvas(900,500);
    
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


}
function draw(){
    Engine.update(engine)
    background("cyan");
   
}


