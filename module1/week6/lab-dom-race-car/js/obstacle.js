class Obstacle {
  constructor(gamescreen) {
    this.gamescreen = gamescreen
    this.positions = [90, 300]
    this.left =
      this.positions[Math.floor(Math.random() * this.positions.length)]
    this.top = -275
    this.width = 120
    this.height = 240
    //this creates the <img /> for the player car
    this.element = document.createElement("img")
    this.element.src = "./images/redCar.png"
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
    this.element.style.position = "absolute"
    this.gamescreen.appendChild(this.element)
  }
  move() {
    //first add the directionX and directionY to the top and left of the car
    this.top += 3

    this.updatePosition()
  }
  updatePosition() {
    //this one is in charge of updating the image on the page
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
  }
}
