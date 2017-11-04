import React, { Component } from 'react';

import GlobeSketch from './globe-sketch';

export default class Globe extends Component {

    componentDidMount() {
        GlobeSketch.start();
    }

    render() {
        return(
            <div id="sketch"></div>
        );
    }
}
