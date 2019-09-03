import React, { Component } from 'react';
import './Homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div>
            <h2>02 September 2019</h2>
          <p>Selamat Datang di website belajar ini</p>
          <p>Student Help dibuat khusus untuk anak-anak Indonesia dengan sebuah misi yaitu membuat masyarakat Indonesia terpelajar. Seluruh konten dari website ini dibuat gratis dan hanya pelajaran tertentu saja seperti mata pelajaran kuliah yang berbayar. Apabila ada saran/masukkan kalian dapat mengirimkannya ke e-mail vincent.ganda@yahoo.com</p>
          <div className="line" />
          <h2>01 September 2019</h2>
          <p>Pelajaran Fisika tentang termodinamik sudah ditambahkan, pelajarannya bisa diakses melalui link ini</p>
          <div className="line" />
          <h2>31 Agustus 2019</h2>
          <p>Website ini resmi dibuka!</p>
            </div>
        );
    }
}

export default Homepage;