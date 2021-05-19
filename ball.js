class Ball{
    constructor(x,y,radius,angle){
        
        var options = {
            "isStatic":false,
            "restitution":0.6,
            "friction":0.3,
            "density":1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 30;

        World.add(world,this.body);
    }

    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill(255,251,276);
     stroke(255,255,276);
     circle(0,0,this.radius);
     pop();
    }
    
}