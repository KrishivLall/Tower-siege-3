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
        this.visiblity = 225;
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
        this.visiblity = this.visiblity - 5;
        translate(pos.x, pos.y);
        rotate(angle);
        tint(255,this.visiblity);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

  
}

   score(){
     console.log("score")
     if(this.visiblity < 0 && this.visiblity >= -105){
       score ++
     }
   }
}