import p5 from 'p5';
import users from '../data/users.js';

const sketch = (p5) => {
    let canvas;
    let earth;
    const radius = 200;
    const userSize = 5;
    const heightFromSurface = -15;


    p5.preload = () => {
        earth = p5.loadImage('https://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74218/world.200412.3x5400x2700.jpg');
    }

    p5.setup = () => {
        canvas = p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
        canvas.parent('sketch');
    }

    p5.draw = () => {
        p5.background(20);
        p5.texture(earth, 0, 0);
        p5.rotateY(p5.frameCount * -0.01);

        p5.pointLight(255, 255, 255, 0, 0, 200);

        p5.noStroke();
        p5.sphere(radius);
        p5.rotateY(-1.5);
        p5.rotateZ(0.1);
        for(const [userName, user] of Object.entries(users)) {
            const longitude = p5.radians(user.longitude);
            const latitude = p5.radians(user.latitude);

            let cx = radius * p5.cos(latitude) * p5.cos(longitude);
            let cy = radius * p5.cos(latitude) * p5.sin(longitude);
            let cz = radius * p5.sin(latitude);

            let x = -cx;
            let y = -cz;
            let z = cy;

            p5.push();
            p5.translate(x, y, z);
            p5.fill(255, 255, 255);
            p5.sphere(userSize);
            p5.pop();
        }
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
