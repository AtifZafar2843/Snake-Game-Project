const board = document.querySelector(".board");
const blockHeight = 30;
const blockWidth = 30;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = [];
const snake = [
  {
    x: 0,
    y: 2,
  },
  {
    x: 0,
    y: 1,
  },
  {
    x: 0,
    y: 0,
  },
];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.style.fontSize = "10px";
    block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}