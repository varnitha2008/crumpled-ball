class paper{                

    constructor(x,y,r){              
        var option=  {                         
    
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
            
        }
        
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x,y,r,option);
    World.add(world,this.body);
    }
    display(){                                          

var paperous=this.body.position;
push();
translate(paperous.x,paperous.y);
ellipseMode(RADIUS);
strokeWeight(3);
fill("pink");
ellipse(0,0,this.r,this.r);
pop();
  




}
}
