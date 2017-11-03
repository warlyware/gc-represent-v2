import p5 from 'p5';

const sketch = (p5) => {
    let canvas;
    p5.setup = () => {
        canvas = p5.createCanvas(600, 600, p5.WEBGL);
        canvas.parent('sketch');
    }
    p5.draw = () => {
        p5.background(51);

        p5.noStroke();
        p5.sphere(200);
        p5.directionalLight(248, 117, 157, 0.5, 0.5, 0.5);
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
