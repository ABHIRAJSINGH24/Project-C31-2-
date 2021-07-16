class Ground{
    constructor(x,y,width,height){
        var options={
          isStatic:true,
          restitution:0,
          friction:1,
          density:5
        }
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body)
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
}