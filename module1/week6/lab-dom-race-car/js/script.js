window.onload = function () {
  const startButton = document.getElementById("start-button")
  const restartButton = document.getElementById("restart-button")
  let ourNewGame
  startButton.addEventListener("click", function () {
    startGame()
  })
  restartButton.addEventListener("click", () => {
    window.location.reload()
  })
  function startGame() {
    console.log("start game")
    ourNewGame = new Game()
    ourNewGame.start()
  }

  //event listeners for the player to move
  window.addEventListener("keydown", function (event) {
    console.log("a key was pressed", event)
    if (event.code === "ArrowRight") {
      console.log("going right!")
      ourNewGame.player.directionX = 3
    }
    if (event.code === "ArrowLeft") {
      console.log("going left!")
      ourNewGame.player.directionX = -3
    }
    if (event.code === "ArrowUp") {
      console.log("going up!")
      ourNewGame.player.directionY = -3
    }
    if (event.code === "ArrowDown") {
      console.log("going down!")
      ourNewGame.player.directionY = 3
    }

    if (event.code === "Space") {
      ourNewGame.shoot()
    }
  })
  //keyup event listener that sets all the directions back to zero
  window.addEventListener("keyup", function (event) {
    // console.log("a key was pressed", event);
    if (event.code === "ArrowRight") {
      ourNewGame.player.directionX = 0
    }
    if (event.code === "ArrowLeft") {
      ourNewGame.player.directionX = 0
    }
    if (event.code === "ArrowUp") {
      ourNewGame.player.directionY = 0
    }
    if (event.code === "ArrowDown") {
      ourNewGame.player.directionY = 0
    }
  })
}
