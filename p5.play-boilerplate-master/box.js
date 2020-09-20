class Box{
  constructor(x, y, width, height){
    var options = {
      'isStatic' : false, 
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.radius = width/2;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(0, 225, 100);
    rect(pos.x, pos.y, this.width, this.height);
  }
  }

