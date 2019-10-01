import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class UtamaBiologi extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Biology Page</h1>
                <h2>Jadi, mau belajar apa hari ini?</h2>
                <p>Sel</p>
                <p>CRISPR</p>
                <p>Dibawah ini adalah tes video untuk youtube</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Nu7OmSqHVng" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>

                
            </div>
        );
    }
}

export default UtamaBiologi;