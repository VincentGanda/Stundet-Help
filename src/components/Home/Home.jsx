import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel'
class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mt-2">
                        <Carousel/>
                    </div>
                    
                <h1>Welcome to Student-Help Page</h1>
                <h2>We are here to help students achieve their dreams</h2>
                <h2>Don't let your dreams be dreams</h2>

                <div className="line" />
                    <h2>01 September 2019</h2>
                    <br/>
                    <p>Pelajaran Fisika tentang termodinamik sudah ditambahkan, pelajarannya bisa diakses melalui link ini</p>
                <div className="line" />
                    <h2>31 Agustus 2019</h2>
                    <p>Website ini resmi dibuka!</p>
                </div>
            </div>
        );
    }
}

export default Home;
