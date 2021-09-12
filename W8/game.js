var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)



var timer = requestAnimationFrame(main)

class Car
{
    constructor()
    {
        this.x=100
        this.y=100
        this.w=100
        this.h=100
        this.vx=1
        this.vy=0
        this.color=`hotpink`
    }

    draw()
    {
        ctx.fillStyle=this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}





function main()
{
    ctx.clearRect(0,0, c.width, c.height);

    timer = requestAnimationFrame(main)
}
