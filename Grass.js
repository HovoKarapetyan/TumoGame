let LivingCreature = require('./LivingCreature');

module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 8;
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
        this.energy++;
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)];

        
        if (exact && this.energy > 9) {
            let x = exact[0];
            let y = exact[1];

            let gr = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(gr);
            this.energy = -10;
        }
    }
    move() {
        let found = super.chooseCell(5);
        let exact = found[Math.floor(Math.random() * found.length)];
        if (exact) {
            this.die();
        }
    }

    die() {
        for (let i = 0; i < grassArr.length; i++) {
            if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                grassArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}
