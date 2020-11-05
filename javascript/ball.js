let ballRadius = 10
let ballX = paddleX + paddleWidth/2
let ballY = canvas.height-paddleHeight-ballRadius
let ballDx = 3
let ballDy = -3

// 바운드
function boundBall() {
    if(ballX + ballDx > canvas.width - ballRadius || ballX + ballDx < ballRadius) {
        ballDx = -ballDx
    }
    if(ballY + ballDy < ballRadius) {
        ballDy = -ballDy
    }
    else if(ballY + ballDy > canvas.height - ballRadius) {
        if(ballX > paddleX && ballX < paddleX + paddleWidth){
            ballDy = -ballDy
        } else {
            lives--
            if(!lives) {
                alert("GAME OVER")
                document.location.reload()
            }
            else {
                ballX = canvas.width / 2
                ballY = canvas.height - 30
                ballDx = 3
                ballDy = -3
                paddleX = (canvas.width - paddleWidth) / 2
            }
        }
    }
}

// 공 랜더링
function drawBall() {
    ctx.beginPath()
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2)
    ctx.fillStyle = "#0095DD"
    ctx.fill()
    ctx.closePath()
}