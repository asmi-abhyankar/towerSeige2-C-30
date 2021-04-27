class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.5,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage ("block.png")
      World.add(world, this.body);

      this.Visiblity=255;
      
    }

    display(){
      var pos= this.body.position;
      var angle = this.body.angle;
      
    
      if(this.body.speed< 3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
        
      }
      else{
        World.remove(world,this.body);
        push ();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop ();
      }
    }
}