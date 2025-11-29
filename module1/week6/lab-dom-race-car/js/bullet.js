class Bullet {
  constructor(gameScreen, playerLeft, playerTop, playerWidth) {
    this.gameScreen = gameScreen
    this.left = playerLeft + playerWidth / 2 - 7
    this.top = playerTop
    this.width = 20
    this.height = 50
    this.element = document.createElement("img")
    this.element.src = "./images/bullet.png"
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
    this.element.style.position = "absolute"
    this.gameScreen.appendChild(this.element)
  }

  move() {
    this.top -= 2
    this.element.style.top = `${this.top}px`
  }
}
