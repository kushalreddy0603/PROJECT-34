const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var Sling1,Sling2,Sling3,Sling4,Sling5;
var Pendulum1,Pendulum2,Pendulum3,Pendulum4,Pendulum5;
var roof
function setup() {

    canvas=createCanvas(windowWidth/2,windowHeight/1.5)
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt)
	canvasmouse.pixelRatio=pixelDensity();
	let options = {
		mouse : canvasmouse
	};

	mConstraint = MouseConstraint.create(engine,options)
	World.add(world,mConstraint);

	//Create the Bodies Here.
roof = new Roofe(650, 350, 400 , 30)
Pendulum1 = new Pendulum(340, 500 , 40)
Pendulum2 = new Pendulum(420, 500 , 40)
Pendulum3 = new Pendulum(500, 500 , 40)
Pendulum4 = new Pendulum(580, 500 , 40)
Pendulum5 = new Pendulum(660, 500 , 40)
Sling1 = new Sling(roof.body, Pendulum1.body, -160, 0)
Sling2 = new Sling(roof.body, Pendulum2.body, -80,0)
Sling3 = new Sling(roof.body, Pendulum3.body,0,0)
Sling4 = new Sling(roof.body, Sling4.body,80,0)
Sling5 = new Sling(roof.body, Sling5.body,160,0)
	Engine.run(engine);
  

}


function draw() {
background("lightpink");
  

 roof.display();
 Pendulum1.display();
 Pendulum2.display();
 Pendulum3.display();
 Pendulum4.display();
 Pendulum5.display();
 Sling1.display();
 Sling2.display();
 Sling3.display();
 Sling4.display();
 Sling5.display();

}
function keyPressed (){
if (keyCode===LEFT_ARROW){
Body.applyForce(Pendulum1.body,Pendulum1.body.position, {x:-300 , y: -300} )

}


if (keyCode ===RIGHT_ARROW){
	Body.applyForce(Pendulum5.body,Pendulum5.body.position, {x:300 , y: -300} )
}
}


function mouseDragged (){
	Matter.Body.setPosition(Pendulum1.body, {x:mouseX, y:mouseY})
}




