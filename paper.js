class paper{
  constructor(x, y, radius) {
      var options = {
        'restitution':0.8,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.image=loadImage("sprites/paper.png")
      this.radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER)
      image(this.image, this.body.position.x , this.body.position.y,70,70);
    
    }
}