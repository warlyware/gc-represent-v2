import p5 from 'p5';

const sketch = (p5) => {
    let longitude = 144.9631;
    let latitude = -37.8136;
    let canvas;
    p5.setup = () => {
        canvas = p5.createCanvas(600, 600, p5.WEBGL);
        canvas.parent('sketch');
    }
    p5.draw = () => {
        p5.background(51);
        p5.rotateY(p5.frameCount * 0.01);
        p5.angle += 0.05;

        p5.directionalLight(248, 117, 157, 0.5, 0.5, 0.5);
        p5.noStroke();
        const radius = 200;
        p5.sphere(radius);

        let theta = p5.radians(latitude) + p5.PI * 2;
        let phi = p5.radians(longitude) + p5.PI;
        let x = radius * p5.sin(theta) * p5.cos(phi);
        let y = -radius * p5.sin(theta) * p5.cos(phi);
        let z = radius * p5.cos(theta);
        console.log(z);
        p5.translate(x, y, z - 10);
        p5.box(10);
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
