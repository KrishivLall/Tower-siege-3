class Box{
    constructor(x, y, width, height, color) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/brick.png");
        World.add(world, this.body);
        this.visiblilty = 225;
        this.color = color;

      }

      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 3){    
        push();  
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
       }

       else{
        World.remove(world,this.body)
        push();
        this.visiblilty = this.visiblilty - 5;
        translate(pos.x, pos.y);
        rotate(angle);
        tint(255,this.visiblilty);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

  
}

   score(){
     if(this.Visiblity < 0 && this.Visiblity >-1005){
       score ++
     }
   }
}