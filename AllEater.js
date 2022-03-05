let LivingCreature = require('./LivingCreature');


module.exports = class AllEater extends LivingCreature{
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
    
    chooseCell(char1, char2) {
        super.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1 || matrix[y][x] == char2) {
                    result.push(this.directions[i]);
                }
            }
        }

        return result;
    }
    mul() {
        let found = super.chooseCell(0, 0);
        let exact = found[Math.floor(Math.random() * found.length)];

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let all = new AllEater(x, y);
            matrix[y][x] = 3;
            EaterArr.push(all);
            this.energy = 1;
        }
    }
    eat() {
        let found = super.chooseCell(1, 2);
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
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1);
                }
            }
            matrix[y][x] = 3;
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
        let found = super.chooseCell(0, 0);
        let found1 = super.chooseCell(4, 4);
        let found2 = super.chooseCell(5, 5);
        let exact = found[Math.floor(Math.random() * found.length)];
        let exact1 = found1[Math.floor(Math.random() * found.length)];
        let exact2 = found2[Math.floor(Math.random() * found.length)];

        if (exact1) {
            this.die();
        } else if (exact2) {
            this.die();
        } else if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 3;
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
        for (let i = 0; i < EaterArr.length; i++) {
            if (EaterArr[i].x == this.x && EaterArr[i].y == this.y) {
                EaterArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}