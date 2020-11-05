let paddleWidth = 75
let paddleHeight = 10
let paddleX = (canvas.width - paddleWidth)/2
let rightPressed = false
let leftPressed = false

// 방향키로 패들 조작
function controllPaddle() {
    document.addEventListener("keydown", function keyDownHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
        }
    }, false)
    document.addEventListener("keyup", function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
        }
    }, false)

    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7
    } else if(leftPressed && paddleX > 0) {
        paddleX -= 7
    }
}


// paddle 랜더링
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = "#0095DD"
    ctx.fill()
    ctx.closePath()
}