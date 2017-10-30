
var DEFAULT_LENGTH = 4;

var snakeBody;
var snakeDirection;

function setupSnake() {
  snakeBody = [];

  for (var i = DEFAULT_LENGTH; i >= 0; i--) {
    snakeBody.push({ x : i, y : 0 });
  }
  
  snakeDirection = { x: 1, y: 0 };
}

function moveSnake() {
  for (var i = (snakeBody.length - 1); i >= 1; i--) {
    var cell = snakeBody[i];
    var prev = snakeBody[i - 1];

    cell.x = prev.x;
    cell.y = prev.y;
  }

  snakeBody[0].x += snakeDirection.x;
  snakeBody[0].y += snakeDirection.y;
}

function growSnake() {
  var lastSnakeCell = snakeBody[snakeBody.length - 1];
  snakeBody.push({
    x : lastSnakeCell.x,
    y : lastSnakeCell.y
  });
}