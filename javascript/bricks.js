let brickRowCount = 3
let brickColumnCount = 6
let brickWidth = 75
let brickHeight = 20
let brickPadding = 10
let bricks = []
for(let r=0; r<brickRowCount; r++) {
    bricks[r] = []
    for(let c=0; c<brickColumnCount; c++) {
        bricks[r][c] = {x: 0, y: 0, status: 1}
    }
}

// 블록과 공이 충돌
function collisionDetection() {
    for(let r=0; r<brickRowCount; r++) {
        for(let c=0; c<brickColumnCount; c++) {
            let b = bricks[r][c]
            if(b.status == 1) {
                if(ballX > b.x && ballX < b.x + brickWidth && ballY > b.y && ballY < b.y + brickHeight) {
                    ballDy = -ballDy
                    b.status = 0
                    score++
                    if(score == brickRowCount * brickColumnCount) {
                        alert("YOU WIN, CONGRATULATION!!")
                        document.location.reload()
                    }
                }
            }
        }
    }
}

// 블록 랜더링
function drawBricks() {
    for(let r=0; r<brickRowCount; r++) {
        for(let c=0; c<brickColumnCount; c++) {
            if(bricks[r][c].status == 1) {
                let brickX = c*(brickWidth+brickPadding)
                let brickY = r*(brickHeight+brickPadding)
                bricks[r][c].x = brickX
                bricks[r][c].y = brickY
                ctx.beginPath()
                ctx.rect(brickX, brickY, brickWidth, brickHeight)
                ctx.fillStyle = "#0095DD"
                ctx.fill()
                ctx.closePath()
            }
        }
    }
}