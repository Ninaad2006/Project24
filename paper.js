class Paper{
    constructor(x,y){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Bodies.rectangle(x,y,options);
this.width=50;
this.height=50;
World.add(world,this.body)
    }
    display(){

        rectMode(CENTER)
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        
        ellipseMode(CENTER);
  
        fill("red");
        ellipse(130, 560, this.width, this.height);
        pop();
    }
}

