class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
          }
          this.x = x;
          this.y = y
          this.radius = radius;
          this.image = loadImage("Plucking mangoes/mango.png");
          this.body = Bodies.circle(this.x,this.y,0.01,options);
          World.add(world,this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}