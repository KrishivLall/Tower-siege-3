class Ball {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          'restitution':0.5,
          'friction':1,
          'density':1,
           
          
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world , this.body);
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle;
      push();
      

      translate(pos.x, pos.y);
      rotate(angle);
      fill("green");
      ellipseMode(RADIUS);
      ellipse(0 , 0, this.radius, this.radius);
      pop();
    }
  }