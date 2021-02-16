class stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("stone.png")
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)

    }
    display(){
        var stonepos=this.body.position
        
        
        
        imageMode(RADIUS)
        image(this.image,stonepos.x,stonepos.y,this.r,this.r)
    
    }
    
}