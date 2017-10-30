
var SIZE_BOARD = 30;
var SIZE_CELL;

function setupBoard() {
  for (var x = 0; x < SIZE_BOARD; x++) {
    for (var y = 0; y < SIZE_BOARD; y++) {
    }
  }

  putRandomFood();
}

function createCell(col, row) {
}

function clearSnakeCells() {
  $('.snake-cell').removeClass('snake-cell');
  $('.snake-head-cell').removeClass('snake-head-cell');
}

function putSnakeOnBoard(snakeBody) {
  for (var i = 0; i < snakeBody.length; i++) {
    var cell = snakeBody[i];
  }
}

function clearFoodCell() {
  $('.fruit-cell').removeClass('fruit-cell');
}

function putRandomFood() {
  var foodCell = {};

  while(true) {
    foodCell.x = Math.floor(Math.random() * SIZE_BOARD);
    foodCell.y = Math.floor(Math.random() * SIZE_BOARD);

    var selectorStr = selectorCell(foodCell.x, foodCell.y);
    var $cell = $(selectorStr);
    if (!($cell.hasClass('snake-cell') || $cell.hasClass('snake-head-cell'))) {
      break;
    }
  }

  var selectorStr = selectorCell(foodCell.x, foodCell.y);
  $(selectorStr).addClass('fruit-cell');
}

function checkEatFood(snakeBody) {
  var head = snakeBody[0];
  var selectorStr = selectorCell(head.x, head.y);
  return $(selectorStr).hasClass('fruit-cell');
}

function checkBoardCollision(snakeBody) {
  var head = snakeBody[0];
  return (head.x < 0 || head.y < 0 || head.x >= SIZE_BOARD || head.y >= SIZE_BOARD);
}

function selectorCell(col, row) {
  return 'div.cell[data-col="' + col + '"][data-row="' + row + '"]';
}