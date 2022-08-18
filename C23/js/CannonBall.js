class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot(){
  var newAngle = Cannon.Angle - 28 ;
  var velocity = p5.vector.fromAngle (newAngle); 
  velocity.mult(0.5);
  Matter.body.setStatic (this.body,false); 
  Matter.body.setVelocity (this.body,{x:30,y:-20}); 
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
