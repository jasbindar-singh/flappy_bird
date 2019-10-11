const canvas = document.querySelector("#simple_animation_window");
const c      = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 600;

let animationComplete = {
    update: () => {return null}
}
let ObstacleRef = new Obstacle();
let BirdRef = new Bird();

let ObstacleArray = []
ObstacleArray.push(ObstacleRef)

document.addEventListener("keydown", () => BirdRef.jump());

const collision_check = (bird, obstacle) => {
    if(( bird.y <= 0 || bird.y + bird.height >=canvas.height ) || (( bird.y <= obstacle.upper_height || bird.y + bird.height >= obstacle.upper_height + obstacle.gap ) && ( bird.x + bird.width >= obstacle.x )))
    {
        // c.clearRect(0, 0, innerWidth, innerHeight);
        c.font = "30px Arial";
        c.strokeText("Game Over", 150, 250);
        return false;
    }
    else
        return true;
}

const addObstacle = (obstacle, bird) => {
    if(obstacle.x === canvas.width/2)
        ObstacleArray.push(new Obstacle())
}

const deleteObstacle = (obstacle, bird) => {
    if(obstacle.x + obstacle.width < bird.x)
        animationComplete = ObstacleArray.shift()
}

function animate(){
    if(collision_check(BirdRef, ObstacleArray[0]))
    {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        BirdRef.update();
        addObstacle(ObstacleArray[0], BirdRef)
        deleteObstacle(ObstacleArray[0], BirdRef)
        for(let i = 0; i < ObstacleArray.length; i++){    
            ObstacleArray[i].update();
            animationComplete.update(); 
        }
    }
    else
        return;
 
}

animate();