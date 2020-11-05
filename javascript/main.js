function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    controllPaddle()
    boundBall()
    collisionDetection()

    drawPaddle()
    drawBall()
    drawBricks()

    ballX += ballDx
    ballY += ballDy
    requestAnimationFrame(play)
}

play()