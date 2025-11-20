class Player {
  constructor(gamescreen, left, top, width, height) {
    this.gamescreen = gamescreen;
    this.left = left;
    this.top = top;
    this.width = 120;
    this.height = 240;
    this.directionX = 0;
    this.directionY = 0;
    //this creates the <img /> for the player car
    this.element = document.createElement("img");
    this.element.src = "../images/car.png";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.position = "absolute";
    this.gamescreen.appendChild(this.element);
  }
  move() {
    //first add the directionX and directionY to the top and left of the car
    this.left += this.directionX;
    this.top += this.directionY;
    //keep the player on the road
    if (this.left < 40) {
      this.left = 40;
    }
    if (this.left + 120 > 460) {
      this.left = 340;
    }
    if (this.top < 0) {
      this.top = 0;
    }
    if (this.top + 240 > 630) {
      this.top = 630 - 240;
    }
    this.updatePosition();
  }
  updatePosition() {
    //this one is in charge of updating the image on the page
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
