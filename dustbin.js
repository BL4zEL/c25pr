class Base{
  constructor(x, y, width, height) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("sprites/dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      image(this.image, this.body.position.x-25 , this.body.position.y-75 , 160,170);
    }
}