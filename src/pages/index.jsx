'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/index.css';

// Importación de logos de las universidades
import iujoLogo from '../assets/img/iujo.png';
import uclaLogo from '../assets/img/ucla.jpeg';
import campesinaLogo from '../assets/img/ucvag.png';
import luterkingLogo from '../assets/img/luterking.png';
import ferminLogo from '../assets/img/LOGO-FERMIN-TORO-.png';
import simonLogo from '../assets/img/simonrodriguez.png';
import unefaLogo from '../assets/img/unefa.png';
import unesLogo from '../assets/img/unes.webp';
import unexpoLogo from '../assets/img/unexpo.png';
import upelLogo from '../assets/img/upel.png';
import uptaebLogo from '../assets/img/uptaeb.png';
import yacambuLogo from '../assets/img/yacambu.png';

//Importacion de logo de las instituciones
import Logo from '../assets/img/logoo.png'
import Fvv from '../assets/img/fvv.png'
import Fedeu from '../assets/img/fevedeu.png'
import Idel from '../assets/img/idel2.png'
import Fundela from '../assets/img/fundela.png'
import Imderi from '../assets/img/imdri.png'

export default function LPUIndex() {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Galería de fotos principal
    const galleryPhotos = [
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&h=600&fit=crop',
        'https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVwb3J0ZXN8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVwb3J0ZXN8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVwb3J0ZXN8ZW58MHx8MHx8fDA%3D',
    ];

    // Logos de universidades
    const universities = [
        { name: 'Instituto Universitario Jesús Obrero', logo: iujoLogo },
        { name: 'Universidad Centroccidental Lisandro Alvarado', logo: uclaLogo },
        { name: 'Universidad Campesina de Venezuela Argimiro Gabaldón', logo: campesinaLogo },
        { name: 'Universidad Nacional Experimental de Lara "Martin Luther King"', logo: luterkingLogo },
        { name: 'Universidad Fermín Toro', logo: ferminLogo },
        { name: 'Universidad Simón Rodríguez', logo: simonLogo },
        { name: 'Universidad Nacional Experimental de las Fuerzas Armadas', logo: unefaLogo },
        { name: 'Universidad Nacional Experimental de la Seguridad', logo: unesLogo },
        { name: 'Universidad Nacional Experimental Politécnica "Antonio José de Sucre', logo: unexpoLogo },
        { name: 'Universidad Pedagógica Experimental Libertador', logo: upelLogo },
        { name: 'Universidad Politécnica Territorial del estado Lara Andrés Eloy Blanco', logo: uptaebLogo },
        { name: 'Universidad Yacambú', logo: yacambuLogo },
    ];

    const insti = [
        { name: 'Federacion Venezolana Deporitva de Educacion Univeritaria', logo: Fedeu },
        { name: 'Instituto de Deportes del Estado Lara', logo: Idel },
        { name: 'Fundación para el Deporte del Estado Lara', logo: Fundela },
        { name: 'Instituto Municipal del Deporte y Recreación de Iribarren', logo: Imderi },
        { name: 'Liga Polideportiva Uviversitaria del Estado Lara', logo: Logo }
    ]

    // Rotación automática de fotos cada 5 segundos
    useEffect(() => {
        const photoInterval = setInterval(() => {
            setCurrentPhotoIndex((prev) => (prev + 2) % galleryPhotos.length);
        }, 3000);
        return () => clearInterval(photoInterval);
    }, [galleryPhotos.length]);

    return (
        <div className="lpu-container">
            {/* Header */}
            <header className="lpu-header">
                <div className="header-content">
                    <div className="logo-section">
                        <img src={Logo} alt="LPU Logo" className="lpu-logo" style={{ width: 'clamp(50px, 8vw, 100px)'}} />
                    </div>
                    <nav className="nav-links">
                        <a href="#home" className="nav-link">Inicio</a>
                        <a href="#competiciones" className="nav-link">Competiciones</a>
                        <a href="#universidades" className="nav-link">Universidades</a>
                        <a href="https://portafolio-9kz.pages.dev/" target="_blank" rel="noopener noreferrer" className="nav-link">Contacto</a>
                    </nav>
                    <Link className="login-btn" to='/login'>
                        <i className="fa fa-user"></i>
                        <span>Login</span>
                    </Link>
                </div>
            </header>

            {/* Hero Section con Galería Rotativa */}
            <section className="hero-section" id="home">
                <div className="photo-gallery">
                    {galleryPhotos.map((photo, index) => (
                        <div
                            key={index}
                            className={`photo-slide ${index === currentPhotoIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${photo})` }}
                        />
                    ))}
                </div>

                <div className="hero-overlay">
                    <div className="hero-content">
                        <h2 className="hero-title">Liga Pólideportiva Universitaria</h2>
                        <p className="hero-subtitle">Excelencia atlética en el deporte universitario</p>
                        <button className="cta-button">Conoce más</button>
                    </div>
                </div>

                <div className="gallery-indicators">
                    {galleryPhotos.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentPhotoIndex ? 'active' : ''}`}
                            onClick={() => setCurrentPhotoIndex(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Galería de Universidades */}
            <section className="universities-section" id="universidades">
                <div className="section-header">
                    <h2 className="section-title">Universidades Participantes</h2>
                    <p className="section-subtitle">Conoce las instituciones que componen nuestra liga</p>
                </div>

                <div className="carousel-container">
                    <div className="carousel-track">
                        {/* Duplicamos los items para efecto infinito */}
                        {[...universities, ...universities].map((university, index) => (
                            <div key={index} className="carousel-item">
                                <div className="university-card">
                                    <div className="university-logo-wrapper">
                                        <img src={university.logo} alt={university.name} className="university-logo" />
                                    </div>
                                    <p className="university-name">{university.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Galería de Identidades */}
            <section className="universities-section" id="universidades">
                <div className="section-header">
                    <h2 className="section-title">Instituciones</h2>
                    <p className="section-subtitle">Conoce las instituciones que componen nuestra liga</p>
                </div>

                <div className="carousel-container">
                    <div className="carousel-track">
                        {/* Duplicamos los items para efecto infinito */}
                        {[...insti, ...insti].map((inst, index) => (
                            <div key={index} className="carousel-item">
                                <div className="university-card">
                                    <div className="university-logo-wrapper">
                                        <img src={inst.logo} alt={inst.name} className="university-logo" />
                                    </div>
                                    <p className="university-name">{inst.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="lpu-footer">
                <div className="footer-content">
                    <p>&copy; 2024 Liga Pólideportiva Universitaria. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <a href="#privacidad">Privacidad</a>
                        <a href="#terminos">Términos</a>
                        <a href="https://portafolio-9kz.pages.dev/" target="_blank" rel="noopener noreferrer">Contacto</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}