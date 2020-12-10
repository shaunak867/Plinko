class Plinko{

    constructor(x,y){
    var option = {
    isStatic:true,
    }
    this.x = x;
    this.y = y;
    this.radius = 10
    this.body = Bodies.circle(x,y,this.radius/2,option)
    World.add(world,this.body)
    
    
    }
    display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    fill("white")
    ellipseMode(CENTER)
    ellipse(0,0,this.radius,this.radius)
    pop()
    
    
    
    }
    
    }
    
    
    
    
    
    
    
    
    
    
    