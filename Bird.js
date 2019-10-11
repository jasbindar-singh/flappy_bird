class Bird
{
    constructor()
    {
        this.width = 30;
        this.height = 30;
        this.x = canvas.width/3 - this.width;
        this.y = canvas.height/3 - this.height;
        this.gravity_value = 0.05;
        this.gravity_speed = 0;
        this.anti_gravity_value = 0.5;
        this.anti_gravity_speed = 0;
        this.toggle_gravity = false
    }

    draw()
    {
        c.fillRect(this.x, this.y, this.width, this.height);
        c.fillStyle = "#00FF00";
    }

    gravity()
    {
        this.gravity_speed += this.gravity_value;
        this.y += this.gravity_speed;
    }

    anti_gravity()
    {
        this.anti_gravity_speed -= this.anti_gravity_value;
        this.y += this.anti_gravity_speed;
    }

    update()
    {
        this.draw();
        if(this.toggle_gravity)
            this.anti_gravity();
        else
            this.gravity();
    }

    jump()
    {
        this.toggle_gravity = !this.toggle_gravity
        this.anti_gravity_speed = 0;
        setTimeout(() => {
            this.toggle_gravity = !this.toggle_gravity
            this.gravity_speed = 0;
        }, 140)
    }
}