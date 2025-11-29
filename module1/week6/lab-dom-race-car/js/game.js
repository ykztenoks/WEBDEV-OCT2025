class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro")
    this.gameScreen = document.getElementById("game-screen")
    this.gameEndScreen = document.getElementById("game-end")
    this.livesElement = document.getElementById("lives")
    this.scoreElement = document.getElementById("score")
    this.player = new Player(this.gameScreen, 280, 380)
    this.height = 600
    this.width = 500
    this.obstacles = []
    this.bullets = []
    this.score = 0
    this.lives = 1
    this.gameIsOver = false
    this.gameIntervalId
    this.gameLoopFrequency = Math.round(1000 / 60)
    this.counter = 0
  }
  start() {
    //set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`
    this.gameScreen.style.width = `${this.width}px`
    //hide the start screen
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "block"
    //create the set interval for the 60 frames per second
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)
  }
  gameLoop() {
    // console.log("game loop");
    this.update()
    this.counter++
    //this checks if the game is over, and clears the setInverval when it is over
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
      this.gameover()
    }
  }
  update() {
    this.player.move()
    //this loops over the obstacles and calls the move method
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i]
      currentObstacle.move()
      this.bullets.forEach((bullet, index) => {
        bullet.move()
        const bulletRect = bullet.element.getBoundingClientRect()
        const obstacleRect = currentObstacle.element.getBoundingClientRect()

        if (
          bulletRect.left < obstacleRect.right &&
          bulletRect.right > obstacleRect.left &&
          bulletRect.top < obstacleRect.bottom &&
          bulletRect.bottom > obstacleRect.top
        ) {
          const explosion = document.createElement("img")

          explosion.src = "./images/explosion.gif"
          explosion.style.width = `100px`
          explosion.style.height = `100px`
          explosion.style.left = `${currentObstacle.element.left}px`
          explosion.style.top = `${currentObstacle.element.top + 100}px`
          explosion.style.position = "absolute"

          this.gameScreen.appendChild(explosion)

          setTimeout(() => {
            explosion.remove()
          }, 1500)

          this.bullets.splice(index, 1)
          this.obstacles.splice(i, 1)
          bullet.element.remove()
          currentObstacle.element.remove()
        }
        if (bullet.top < -100) {
          bullet.element.remove()
          this.bullets.splice(index, 1)
        }
      })
      //if the obstacle passes the bottom
      if (currentObstacle.top > 650) {
        this.obstacles.splice(i, 1)
        //this removes the red car from the html code
        currentObstacle.element.remove()
        this.score++
        this.scoreElement.innerText = this.score
      }

      //check for collision for each obstacle
      if (this.player.didCollide(currentObstacle)) {
        //if the obstacle passes the bottom
        this.obstacles.splice(i, 1)
        //this removes the red car from the html code
        currentObstacle.element.remove()
        this.lives--
        this.livesElement.innerText = this.lives
        if (this.lives === 0) {
          this.gameIsOver = true
        }
      }
    }

    //this is adding a new obstacle every 170 frames
    if (this.counter % 170 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen))
    }
  }
  gameover() {
    console.log("game is over")
    this.gameScreen.style.display = "none"
    this.gameEndScreen.style.display = "block"
  }

  shoot() {
    this.bullets.push(
      new Bullet(
        this.gameScreen,
        this.player.left,
        this.player.top,
        this.player.width
      )
    )
  }
}
