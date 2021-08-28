class ground{
    constructor(x,y,w,h) {
        let options = {
            isStatic: true
        }
        this.w = w
        this.y = y
        this.x = x
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,options)
        
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop()
    }
}