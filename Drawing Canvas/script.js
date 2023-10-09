const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d"); // get the 2d context

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "#BADA55";
// context.lineJoin = 'round';
// context.lineCap = 'round';
context.lineWidth = 10;
context.globalCompositionOperation = "multiply";

let isDrawing = false; // aflag to check whether someone is drawing on the canvas or just movinf the mouse over it
let lastx = 0, lasty = 0; //gives the cordinates of the lines you drew
let hue = 0;
let dir = true;

function draw(e) {
  if (!isDrawing) return; // prevent the function from drawing when they are not moused down
  console.log("drawing");
  context.strokeStyle = `hsl(${hue},100%,50%)`; //syntax: hue=variable colors, saturation=100%, lightness =50%
  // context.lineWwidth=hue; //dynamically change the cursor stroke width ;

  // if we dont update lastx & lasty, we are always beginning at (0,0)=leftmost corner and ending at wherever our cursor is being dragged
  context.beginPath();
  context.moveTo(lastx, lasty);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastx, lasty] = [e.offsetX, e.offsetY];
  hue++;
  if(hue>=360)// default reset value for hsl spectrum
  hue=0;
  if (context.lineWidth >= 100 || context.lineWidth <= 1) dir = !dir;

  if (dir) context.lineWidth++;
  else context.lineWidth--;
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastx, lasty] = [e.offsetX, e.offsetY]; // this is done so that everytime we dont start from beginnig, instad wew can start from wherever the mouse is pointing currently
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
