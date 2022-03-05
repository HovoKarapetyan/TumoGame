
var side = 20;
var socket = io();

weath = 'summer'
function winter() {
  weath = 'winter'
}
function spring() {
  weath = 'spring'
}
function summer() {
  weath = 'summer'
}
function autumn() {
  weath = 'autumn'
}

function setup() {
  frameRate(4);
  createCanvas(20 * side, 20 * side);
  background("#acacac");

}

function nkarel(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        if (weath == "winter") {
          fill("#f0ffff");
        }
        else if (weath == 'spring') {
          fill("green");
        }
        else if (weath == 'summer') {
          fill("green");
        }
        else if (weath == 'autumn') {
          fill("#bdb76b");
        }
        rect(x * side, y * side, side, side);

      } else if (matrix[y][x] == 0) {
        fill("#acacac");
        if (weath == 'winter') {
          fill("#acacac");
        }
        else if (weath == 'spring') {
          fill("#acacac");
        }
        else if (weath == 'summer') {
          fill("#acacac");
        }
        else if (weath == 'autumn') {
          fill("#acacac");
        }
        rect(x * side, y * side, side, side);

      } else if (matrix[y][x] == 2) {
        fill("yellow");
        if (weath == 'winter') {
          fill("yellow");
        }
        else if (weath == 'spring') {
          fill("yellow");
        }
        else if (weath == 'summer') {
          fill("yellow");
        }
        else if (weath == 'autumn') {
          fill("yellow");
        }
        rect(x * side, y * side, side, side);

      } else if (matrix[y][x] == 3) {
        fill("red");
        if (weath == 'winter') {
          fill("#b22222");
        }
        else if (weath == 'spring') {
          fill("#ff6347");
        }
        else if (weath == 'summer') {
          fill("red");
        }
        else if (weath == 'autumn') {
          fill("#dc143c");
        }
        rect(x * side, y * side, side, side);

      } else if (matrix[y][x] == 4) {
        fill("blue");
        if (weath == 'winter') {
          fill("#6495ed");
        }
        else if (weath == 'spring') {
          fill("#0fdbff");
        }
        else if (weath == 'summer') {
          fill("blue");
        }
        else if (weath == 'autumn') {
          fill("#1e90ff");
        }
        rect(x * side, y * side, side, side);

      } else if (matrix[y][x] == 5) {
        fill("orange");
        if (weath == 'winter') {
          fill("#daa520");
        }
        else if (weath == 'spring') {
          fill("#f0e68c");
        }
        else if (weath == 'summer') {
          fill("orange");
        }
        else if (weath == 'autumn') {
          fill("#f4a460");
        }
        rect(x * side, y * side, side, side);
      }
      rect(x * side, y * side, side, side);
    }
  }


}

function AddGrass() {
  socket.emit("AddGrass");
}

function AddGrassEater() {
  socket.emit("AddGrassEater");
}

function AddallEater() {
  socket.emit("AddallEater");
}

function AddFier() {
  socket.emit("AddFier");
}

function clearm() {
  socket.emit("Clear");
}

function rand() {
  socket.emit("Random")
}

function stop() {
  socket.emit("Stop")
}

function run() {
  socket.emit('Run');
}

    socket.on('send matrix', nkarel);
