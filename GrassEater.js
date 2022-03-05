let LivingCreature = require('./LivingCreature');

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    
    mul() {
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)];


        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);
            this.energy = 1;
        }
    }
    eat() {
        let found = super.chooseCell(1);
        let exact = found[Math.floor(Math.random() * found.length)];

        if (exact) {
            this.energy += 5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                }
            }
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            if (this.energy > 30) {
                this.mul();
            }
        } else {
            this.move();
        }
    }
    move() {
        let found = super.chooseCell(0);
        let found1 = super.chooseCell(4);
        let found2 = super.chooseCell(5);
        let exact2 = found2[Math.floor(Math.random() * found.length)];
        let exact1 = found1[Math.floor(Math.random() * found.length)];
        let exact = found[Math.floor(Math.random() * found.length)];

        if (exact1) {
            this.die();
        } else if (exact2) {
            this.die();
        } else if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.energy--;
            if (this.energy < 0) {
                this.die();
            }
        } else {
            this.energy--;
            if (this.energy < 0) {
                this.die();
            }
        }
    }
    die() {
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}