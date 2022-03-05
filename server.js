var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000, () => {
  console.log('connected');
});


matrix = [];

function matrixGenerator(
  matrixSize,
  grassCount,
  grassEaterCount,
  allEaterCount,
  waterCount,
  fierCount
) {
  for (let i = 0; i < matrixSize; i++) {
    matrix[i] = [];
    for (let o = 0; o < matrixSize; o++) {
      matrix[i][o] = 0;
    }
  }
  for (let i = 0; i < grassCount; i++) {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    matrix[y][x] = 1;
  }
  for (let i = 0; i < grassEaterCount; i++) {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    matrix[y][x] = 2;
  }
  for (let i = 0; i < allEaterCount; i++) {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    matrix[y][x] = 3;
  }
  for (let i = 0; i < waterCount; i++) {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    matrix[y][x] = 4;
  }
  for (let i = 0; i < fierCount; i++) {
    let x = Math.floor(Math.random() * matrix[0].length);
    let y = Math.floor(Math.random() * matrix.length);
    matrix[y][x] = 5;
  }
}
 matrixGenerator(
  20,
  10,
  10,
  10,
  1,
  2
);

io.sockets.emit('send matrix', matrix);




grassArr = [];
grassEaterArr = [];
EaterArr = [];
WaterArr = [];
FierArr = [];


AllEater = require('./AllEater');
Fier = require('./Fier');
Grass = require('./Grass');
GrassEater = require('./GrassEater');
Water = require('./Water');


function createObject() {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y);
        grassArr.push(gr);
      } else if (matrix[y][x] == 2) {
        var eater = new GrassEater(x, y);
        grassEaterArr.push(eater);
      } else if (matrix[y][x] == 3) {
        var all = new AllEater(x, y);
        EaterArr.push(all);
      } else if (matrix[y][x] == 4) {
        var wat = new Water(x, y);
        WaterArr.push(wat);
      } else if (matrix[y][x] == 5) {
        var fier = new Fier(x, y);
        FierArr.push(fier);
      }
    }
  }
  
  io.sockets.emit('send matrix', matrix);
}

function stop() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        grassArr.length = 0;
      } else if (matrix[y][x] == 2) {
        grassEaterArr.length = 0;
      } else if (matrix[y][x] == 3) {
        EaterArr.length = 0;
      } else if (matrix[y][x] == 4) {
        WaterArr.length = 0;
      } else if (matrix[y][x] == 5) {
        FierArr.length = 0;
      }
    }
  }
  
}

function run() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y);
        grassArr.push(gr);
      } else if (matrix[y][x] == 2) {
        var eater = new GrassEater(x, y);
        grassEaterArr.push(eater);
      } else if (matrix[y][x] == 3) {
        var all = new AllEater(x, y);
        EaterArr.push(all);
      } else if (matrix[y][x] == 4) {
          var wa = new Water(x, y);
          WaterArr.push(wa);
      } else if (matrix[y][x] == 5) {
        var fier = new Fier(x, y);
        FierArr.push(fier);
      }
    }
  }
}

function clearm() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1 || matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 4 || matrix[y][x] == 5) {
        EaterArr.length = 0;
        grassArr.length = 0;
        grassEaterArr.length = 0;
        WaterArr.length = 0;
        FierArr.length = 0;
        matrix[y][x] = 0;
      }
    }
  }
}

function rand() {
  if (run()) {
    stop();
  }
  function matrixGenerator(
    matrixSize,
    grassCount,
    grassEaterCount,
    allEaterCount,
    waterCount,
    fierCount
  ) {
    for (let i = 0; i < matrixSize; i++) {
      matrix[i] = [];
      for (let o = 0; o < matrixSize; o++) {
        matrix[i][o] = 0;
      }
    }
    for (let i = 0; i < grassCount; i++) {
      let x = Math.floor(Math.random() * matrix[0].length);
      let y = Math.floor(Math.random() * matrix.length);
      matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
      let x = Math.floor(Math.random() * matrix[0].length);
      let y = Math.floor(Math.random() * matrix.length);
      matrix[y][x] = 2;
    }
    for (let i = 0; i < allEaterCount; i++) {
      let x = Math.floor(Math.random() * matrix[0].length);
      let y = Math.floor(Math.random() * matrix.length);
      matrix[y][x] = 3;
    }
    for (let i = 0; i < waterCount; i++) {
      let x = Math.floor(Math.random() * matrix[0].length);
      let y = Math.floor(Math.random() * matrix.length);
      matrix[y][x] = 4;
    }
    for (let i = 0; i < fierCount; i++) {
      let x = Math.floor(Math.random() * matrix[0].length);
      let y = Math.floor(Math.random() * matrix.length);
      matrix[y][x] = 5;
    }
  }
  matrixGenerator(
    20,
    10,
    10,
    10,
    1,
    2
  );
}

function AddGrass() {
  if(stop){
    run();
  }
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 20);;
    let y = Math.floor(Math.random() * 20);;
    matrix[y][x] = 1;
  }
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y);
        grassArr.push(gr);
      }

    }
  }
  
  io.sockets.emit("send matrix", matrix);
}

function AddGrassEater() {
  if(stop){
    run();
  }
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * 20);;
        let y = Math.floor(Math.random() * 20);;
        matrix[y][x] = 2;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }

        }
    }
    
    io.sockets.emit("send matrix", matrix);
}

function AddFier() {
  if(stop){
    run();
  }
  for (let i = 0; i < 1; i++) {
      let x = Math.floor(Math.random() * 20);;
      let y = Math.floor(Math.random() * 20);;
      matrix[y][x] = 5;
  }
  for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {

          if (matrix[y][x] == 2) {
              let eater = new Fier(x, y);
              FierArr.push(eater);
          }

      }
  }
  
  io.sockets.emit("send matrix", matrix);
}

function AddallEater(){
  if(stop){
    run();
  }
  for (let i = 0; i < 1; i++) {
      let x = Math.floor(Math.random() * 20);;
      let y = Math.floor(Math.random() * 20);;
      matrix[y][x] = 3;
  }
  for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {

          if (matrix[y][x] == 2) {
              let eater = new AllEater(x, y);
              EaterArr.push(eater);
          }

      }
  }
  
  io.sockets.emit("send matrix", matrix);
}


function game() {

  for (let i = 0; i < WaterArr.length; i++) {
    var water = WaterArr[i];
    water.waterColor();
    // console.log(i);
  }

  for (let i = 0; i < grassArr.length; i++) {
    var grass = grassArr[i];
    grass.mul();
    grass.move();
  }

  for (let i = 0; i < grassEaterArr.length; i++) {
    var eater = grassEaterArr[i];
    eater.eat();
  }
  for (let i = 0; i < EaterArr.length; i++) {
    var me = EaterArr[i];
    me.eat();
  }
  
  
  io.sockets.emit("send matrix", matrix);
}
setInterval(game,500);

function winter(){

}

function spring(){
  
}

function summer(){
  
}

function autumn(){
  
}


io.on('connection', function (socket) {
  createObject()
  socket.on('Stop', stop);
  socket.on('Clear', clearm);
  socket.on('Run', run);
  socket.on('Random', rand);
  socket.on('AddGrass', AddGrass);
  socket.on('AddGrassEater', AddGrassEater);
  socket.on('AddFier', AddFier);
  socket.on('AddallEater', AddallEater)
})