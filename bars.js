class bar{
    constructor(posx,posy,width,height){
        this.body=Bodies.rectangle(posx,posy,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        fill("white");
        stroke("white");
        rect(0,0,this.width,this.height);
        pop();
       
    }

}