class Ground {
    constructor(x,y,width,height){
    var options={
        isStatic:false,
        friction:0.1
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=800;
    this.height=20;
    World.add(world,this.body)
}
display(){
    push()
    rectMode(CENTER);
    fill("yellow")
    rect(400,600,this.width,this.height)
    pop()
}
}
