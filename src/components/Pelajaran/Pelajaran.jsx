import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Pelajaran extends Component {
    render() {
        return (
            <div>
                <Link to="/UtamaBiologi"><h2>Biologi</h2></Link>
                <p>Pelajaran yang bikin kamu mabok hapalan</p>
                <Link><h2>Matematika</h2></Link>
                <p>Pelajaran yang bikin anak nangis</p>
                <Link><h2>Fisika</h2></Link>
                <p>Susah itu relatif</p>
                <Link><h2>Kimia</h2></Link>
                <p>Reaksimu belajar kimia lebih takut daripada ditolak gebetan</p>
            </div>
        );
    }
}

export default Pelajaran;