import p5 from 'p5';

const sketch = (p5) => {
    let canvas;
    p5.setup = () => {
        canvas = p5.createCanvas(600, 600);
        canvas.parent('sketch');
    }
    p5.draw = () => {
        p5.background('#111');
    }
}

class Sketch {
    constructor() {
        this.p5 = p5;
    }

    start() {
        new this.p5(sketch);
    }
}

export default new Sketch();
