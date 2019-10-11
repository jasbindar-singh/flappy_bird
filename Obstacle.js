class Obstacle
{
    constructor()
    {
        this.x = canvas.width;
        this.y = 0;
        this.speed = 1;
        this.gap = 200;
        this.width = 50;
        this.upper_height = Math.floor( Math.random() * 300 );
        this.lower_height = 600 - (this.gap + this.upper_height);
    }

    draw()
    {
        c.fillRect(this.x, this.y, this.width, this.upper_height);
        c.fillRect(this.x, this.y + this.gap + this.upper_height, this.width, this.lower_height);
    }

    update()
    {
        this.draw();
        this.x = this.x - this.speed;
    }
}