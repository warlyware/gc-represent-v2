import React, { Component } from 'react';

import Sketch from './p5-sketch';

export default class SketchComponent extends Component {

    componentDidMount() {
        Sketch.start();
    }

    render() {
        return(
            <div id="sketch"></div>
        );
    }
}
