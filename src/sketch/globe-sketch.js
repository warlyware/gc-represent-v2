import p5 from 'p5';
import users from '../data/users.js';

const sketch = (p5) => {
    let canvas;
    let earth;
    const radius = 400;
    const userSize = 30;
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
        p5.rotateY(p5.frameCount * 0.01);
        p5.angle -= 0.05;

        p5.pointLight(255, 255, 255, 0, 0, 200);

        p5.noStroke();
        p5.sphere(radius);

        for(const [userName, user] of Object.entries(users)) {
            let longitude = 144.9631;
            let latitude = -37.8136;

            let theta = p5.radians(user.latitude) + p5.PI/2;
            let phi = p5.radians(-user.longitude) + p5.PI;

            let x = radius * p5.sin(theta) * p5.cos(phi);
            let y = radius * p5.sin(theta) * p5.sin(phi);
            let z = radius * p5.cos(theta);

            p5.push();
            p5.translate(x, y, z);
            p5.fill(255, 255, 255);
            p5.box(userSize);
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
