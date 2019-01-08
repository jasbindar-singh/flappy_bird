const canvas = document.querySelector("#simple_animation_window");
const c      = canvas.getContext("2d");
const obstacle_array = [];
let check_gameover=true;

canvas.width = 400;
canvas.height = 600;

class Obstacle
{
    constructor()
    {
        this.x = 400;
        this.y = 0;
        this.speed = 1;
        this.obstacle_gap = 200;
        this.obstacle_width = 50;
        this.upper_height = Math.floor( Math.random() * 300 );
        this.lower_height = 600 - (this.obstacle_gap + this.upper_height);
        this.bool_check = true;
    }

    draw()
    {
        c.fillRect(this.x, this.y, this.obstacle_width, this.upper_height);
        c.fillRect(this.x, this.y + this.obstacle_gap + this.upper_height, this.obstacle_width, this.lower_height);
    }

    update()
    {
        this.draw();
        this.x = this.x - this.speed;
        if(this.bool_check){
            if (this.x <= 200 - this.obstacle_width){
                obstacle_array.push(new Obstacle());
                this.bool_check = false;
            }       
        }
        if (this.x <= 200 - this.obstacle_width)
            example = new Obstacle();
    }

    collision_check()
    {
        /*if(bird_example.y + bird_example.width <= this.upper_height && (bird_example.x >= this.y && bird_example.x <= this.y + this.y + this.obstacle_width))
            console.log("GO");*/
        if(( bird_example.y <= 0 || bird_example.y + bird_example.height >=600 ) || (( bird_example.y <= this.upper_height || bird_example.y + bird_example.height >= this.upper_height + this.obstacle_gap ) && ( bird_example.x + bird_example.width >= this.x )))
        {
            console.log("jk");
            c.clearRect(0, 0, innerWidth, innerHeight);
            c.font = "30px Arial";
            c.strokeText("Game Over", 150, 250);
            check_gameover=false;
        }

        /*if((( bird_example.y <= this.upper_height || bird_example.y + bird_example.height >= this.upper_height + this.obstacle_gap ) && ( bird_example.x + bird_example.width >= this.x )))
            console.log("GO");*/
    }
}

class Bird
{
    constructor()
    {
        this.x = 200;
        this.y = 300;
        this.width = 30;
        this.height = 30;
        this.gravity_value = 0.1;
        this.gravity_speed = 0;
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

    update()
    {
        this.draw();
        this.gravity();
    }
}

let example = new Obstacle();
obstacle_array.push(example);

const bird_example = new Bird();

function jump()
{
    bird_example.y -= 50;
    bird_example.gravity_speed = 0;
}

document.addEventListener("keydown", jump);

function animate(){
    if(check_gameover)
    {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        bird_example.update();
        /*for(let i=0; i < obstacle_array.length ; i++){
            obstacle_array[i].update();   
        }*/
        example.update();
        example.collision_check();
    }
    else
        return;
 
}

animate();