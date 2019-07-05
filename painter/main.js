 let canvas = document.getElementById("canvas");
 let context = canvas.getContext("2d");
 let md = false;
 let bgBtn = false;
 let eraserBtn = false;
 let size = document.getElementById("size");
 let sizeNum = document.getElementById("size-num");
 size.addEventListener("change", function() {
   sizeNum.value = size.value;
 })



canvas.addEventListener("mousedown", function (){
    md = true;
})
canvas.addEventListener("mousemove", function(e) {
        if(md) {
            var x = e.offsetX;
            var y = e.offsetY;
            var dx = e.movementX; 
            var dy = e.movementY;
            context.beginPath();
            context.moveTo(x, y); 
            context.lineCap = 'round';
            context.lineTo(x - dx, y - dy);
            context.lineWidth = sizeNum.value;
            context.stroke();
        }
    })

canvas.addEventListener("mouseup", function() {
  md = false;
})
generatePalette(document.getElementById("color-palette"));
var paletteCell = document.createElement('li');
function generatePalette(palette) {
    for (var r = 0, max = 4; r <= max; r++) {
      for (var g = 0; g <= max; g++) {
        for (var b = 0; b <= max; b++) {
          var paletteCell = document.createElement('li');
          paletteCell.className = 'cell';
          paletteCell.addEventListener('click', function changeColor(e) {
            context.strokeStyle = e.target.style.backgroundColor;
          });
          paletteCell.addEventListener('click', function changeColor(e) {
            if(bgBtn) {
              canvas.style.backgroundColor = e.target.style.backgroundColor;
            }
          });

          paletteCell.style.backgroundColor = (
            'rgb(' + Math.round(r * 255 / max) + ", "
            + Math.round(g * 255 / max) + ", "
            + Math.round(b * 255 / max) + ")"
          );

          palette.appendChild(paletteCell);
      
        }
      }
    }
  }
  document.getElementById('clear').addEventListener ('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.backgroundColor = "white";
  })

  document.getElementById('bg-tool').addEventListener("click", function() {
    bgBtn = true;
  })
  document.getElementById('brush-tool').addEventListener("click", function() {
    bgBtn = false;
  })




 






