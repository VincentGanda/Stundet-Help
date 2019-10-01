import React, { Component } from 'react';

class Sel extends Component {
    render() {
        return (
            <div>
                <table>
                    <div className="col-8">
                    <h1>Microscope</h1>
                    <p>Cells are too small to see by the naked eye</p>
                    <p> Antony van Leeuwenhoek (1632-1723) - developed some of the earliest microscopes</p>
                    <p>Modern Microscopes</p>
                     <p>Bright Field, Fluorescence, Phase Contrast, Dark Field, Differential Interference, Digital Video Microscopy,
                     Confocal, 2 photon confocal, spinning disc confocal, total internal reflection fluorescence (TIRF)</p>
                     <p>Electron Microscope (EM)</p>
                     <p>Transmission, scanning, scanning tunneling</p>
                     <p>Magnetic Resonance Imaging (MRI)</p>
                     <p>(MH - This topic will also be covered in your laboratory.)</p>
                    </div>
                    <div className="col-4">
                    <img src ="https://www.glofish.com/wp-content/gallery/glofish-group/glofish-group-gallery-image-hi-res_0.jpg" style={{width: "150px"}}/>
                    </div>
                </table>
            </div>
        );
    }
}

export default Sel;    