import { Link } from 'react-router-dom';
import '../assets/css/index.css';
import Logo from '../assets/img/logoo.png'

export default function Noticias() {
    const zones = [
        {
            title: "ZONA 1 (Región Capital)",
            institutions: "UMC, UCV, UCSAR, UPEL, UBV, UNEARTE, UCAB, UNES, UMBV, UPAFV, FMS, UBTJR, UVH, UAV, ISUM, IUPG, IUDERP, CUP, CUR, ENAHP, TECAV, IUPCP, IUTJMC, IUTV, IUSPO, IAEL"
        },
        {
            title: "ZONA 2 (Región Capital)",
            institutions: "UCS, UNESR, IUTAJS, USB, UNEFA, IUJO, UPTBAL, UPTAMCA, UMA, MS, UNA, UNEM, ULAC, IUDLM, IUNP, IUDAG, IUS, IUYLM, CUE, IUAA, IUTJS, IUTI, IUTRBF, IUTAJHS, CIPPSV, CESDI"
        },
        {
            title: "ZONA 3 (Región Capital)",
            institutions: "UNEXCA, UNETI, UBC, UNETRANS, UPTCMS, ENAHP, USM, UNIMET, UAH, IUPSM, UJMV, UNE, UICOM, IUGT, IVAL, AVEPANE, UPTVT, CUCMC, CUJP, CUMT, IUTA, IUTIRLA, IUTTOL, IUPSM, IESA, UNC"
        },
        {
            title: "ZONA 4 (Yaracuy, Lara, Portuguesa, Cojedes)",
            institutions: "UPTPJM, UNEY, UPTYAB, UCLA, UNEXPO, UPTAEB, UCVAG, UNELMLK, UFT, UDS, UNY, IUNAV, IUPMA"
        },
        {
            title: "ZONA 5 (Oriente/Sur)",
            institutions: "UPTJAA, UNIMAR, UGMA, UDO, UPTOSCR, UPTPLMR, IUTSO, UNEG, UPTNMLS, UNASUR, UTDFT, UNEXEE, UNEIT, IUI, IUTGPMF, IUTAMA, IUTEMAR, IUTHEPI"
        },
        {
            title: "ZONA 6 (Andes/Llanos)",
            institutions: "UNELLEZ, UPTBJFR, IUTAC, ULA, UPTMKR, UPTTMBI, UNET, UPTNTMS, UPTAIET, UNATUR, IALAPF, UVM, IUFRONT, IUGC, IUTCM, UNIHER, IUTLA, IUTEMBI, IUESTA, IESIP"
        },
        {
            title: "ZONA 7 (Centro/Llanos)",
            institutions: "UC, UPTPC, UPTLLJR, UNERG, UPTAFBF, IUAC, UBA, UPTV, UAM, CUAM, UNIPAP, UJAP, UNITEC, IUCAF, IUNICS, CUPIO, IUTLEAC, IUTAM, POLYCOM, IUTAR, IUTEPAL, IUTMM, IUTEPI, IUTPAS, IUTSI"
        },
        {
            title: "ZONA 8 (Zulia, Falcón)",
            institutions: "UNEFM, UPTFAG, UNIOJEDA, LUZ, UNERMB, UPTZ, UPTM, UDJGH, URBE, UDEFA, UNICA, URU, IUNE, IUJEL, IUSF, CUFT, CUNIBE, IUTJLCH, IUTPEC, UNIR"
        }
    ];

    return (
        <div className="lpu-container">
            {/* Header */}
            <header className="lpu-header">
                <div className="header-content">
                    <div className="logo-section">
                        <Link to="/">
                            <img src={Logo} alt="LPU Logo" className="lpu-logo" style={{ width: 'clamp(50px, 8vw, 100px)'}} />
                        </Link>
                    </div>
                    <nav className="nav-links">
                        <Link to="/" className="nav-link">Inicio</Link>
                        <Link to="/noticias" className="nav-link active">Noticias</Link>
                        <a href="/#competiciones" className="nav-link">Competiciones</a>
                        <a href="/#universidades" className="nav-link">Universidades</a>
                    </nav>
                    <Link className="login-btn" to='/login'>
                        <i className="fa-solid fa-user"></i>
                        <span>Login</span>
                    </Link>
                </div>
            </header>

            <main style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)', maxWidth: '1200px', margin: '0 auto' }}>
                <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                        Documento Completo: JUVINEU 2026
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto' }}>
                        Información detallada de los XIX Juegos Venezolanos de Instituciones de Educación Universitaria.
                    </p>
                </section>

                <div style={{ display: 'grid', gap: '3rem' }}>
                    
                    {/* 1. Objetivos del Evento */}
                    <section className="news-card" style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                        <h2 style={{ color: 'var(--primary-dark)', borderLeft: '5px solid var(--primary-gold)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                            1. Objetivos del Evento
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>Masificación</h4>
                                <p>Fortalecer la práctica deportiva en todo el Subsistema de Educación Universitaria como herramienta de formación integral.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>Alto Rendimiento</h4>
                                <p>Servir como plataforma para el crecimiento de la reserva deportiva nacional y detección de nuevos talentos.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>Programación Permanente</h4>
                                <p>Incentivar el desarrollo de actividades deportivas continuas en todas las instituciones del país.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Ficha Técnica */}
                    <section style={{ background: 'var(--primary-dark)', color: 'white', padding: '2.5rem', borderRadius: '20px' }}>
                        <h2 style={{ borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem', marginBottom: '2rem' }}>2. Ficha Técnica</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>Disciplinas (21)</h3>
                                <p style={{ opacity: '0.9', lineHeight: '1.8' }}>
                                    <strong>Olímpicas (15):</strong> Atletismo, Baloncesto 3x3, Baloncesto 5x5, Softball, Judo, Lev. Pesas, Lucha (Libre y Greco), Tae Kwon Do, Tenis de Mesa, Voleibol Cancha, Playa, Fútbol Campo, Natación, Bádminton y Tenis Campo.<br/><br/>
                                    <strong>No Olímpicas (6):</strong> Kickingball, Ajedrez, Béisbol 5, Kárate Do, Fútbol Sala y Deportes Electrónicos.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>Categorías de Edad</h3>
                                <p style={{ opacity: '0.9', lineHeight: '1.8' }}>
                                    <strong>Programa FISU (17-25 años):</strong> Aplicable a 17 disciplinas, incluyendo ajedrez y todas las olímpicas.<br/><br/>
                                    <strong>Categoría Abierta (+17 años):</strong> Béisbol 5, Softball, Kickingball y Deportes Electrónicos.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Cronograma y Ruta */}
                    <section style={{ background: '#f8f9fa', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                        <h2 style={{ color: 'var(--primary-dark)', marginBottom: '2rem', textAlign: 'center' }}>3. Ruta de Clasificación y Fechas Claves</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { date: "25 de Febrero", event: "Lanzamiento Oficial" },
                                { date: "21 de Marzo", event: "Mesa Técnica Nacional" },
                                { date: "07 Abril - 30 Junio", event: "Fase 1: Clasificatorios por Zona" },
                                { date: "15 - 30 de Julio", event: "Inscripciones Nominales" },
                                { date: "10 de Septiembre", event: "Inicio del Recorrido del Fuego Patrio" },
                                { date: "02 - 15 de Octubre", event: "FASE NACIONAL: Celebración de JUVINEU 2026" }
                            ].map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', background: 'white', padding: '1rem 2rem', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.03)' }}>
                                    <span style={{ fontWeight: '700', color: 'var(--primary-orange)', minWidth: '180px' }}>{item.date}</span>
                                    <span style={{ color: 'var(--primary-dark)', fontWeight: '500' }}>{item.event}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. Instituciones Participantes por Zona */}
                    <section>
                        <h2 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>4. Instituciones Participantes por Zona</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                            {zones.map((zone, index) => (
                                <div key={index} style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #eee' }}>
                                    <h4 style={{ color: 'var(--primary-dark)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{zone.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{zone.institutions}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Medallería y Puntuación */}
                    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'var(--primary-gold)', color: 'var(--primary-dark)', padding: '2.5rem', borderRadius: '20px' }}>
                            <h2>5. Medallería Puntuable</h2>
                            <p style={{ fontSize: '1.1rem', marginTop: '1rem', fontWeight: '500' }}>El campeón se define por puntos acumulados según medallas:</p>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                                <div><h3 style={{ fontSize: '2.5rem' }}>264</h3><p>Oro</p></div>
                                <div><h3 style={{ fontSize: '2.5rem' }}>264</h3><p>Plata</p></div>
                                <div><h3 style={{ fontSize: '2.5rem' }}>326</h3><p>Bronce</p></div>
                            </div>
                            <p style={{ marginTop: '2rem' }}><strong>Total:</strong> 854 medallas puntuables en disputa.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3>Pesos de Medallería</h3>
                            <ul style={{ marginTop: '1.5rem', listStyle: 'none', paddingLeft: '0' }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Lev. de Pesas:</strong> 180 medallas</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Atletismo:</strong> 132 medallas</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Natación:</strong> 120 medallas</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Ajedrez:</strong> 108 medallas</li>
                            </ul>
                        </div>
                    </section>

                    {/* 6 y 7. Reglas y Responsabilidades */}
                    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #eee' }}>
                            <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>6. Condiciones de Participación</h3>
                            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                                <li>Estar inscrito en una IEU reconocida por el MPPEU.</li>
                                <li>Ser estudiante regular (mín. 2do semestre) o egresado (máx. 1 año).</li>
                                <li>Inscripción obligatoria en el sistema oficial.</li>
                                <li>Haber participado en clasificatorios previos.</li>
                                <li>Presentar certificado de aptitud física vigente.</li>
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #eee' }}>
                            <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>7. Responsabilidades Logísticas</h3>
                            <div style={{ display: 'grid', gap: '1rem', fontSize: '0.9rem' }}>
                                <div><strong>MPPEU:</strong> Uniformes de competencia, transporte extraurbano y logística de viaje.</div>
                                <div><strong>Comité Nacional:</strong> Alimentación, hospedaje, arbitraje y premiación.</div>
                                <div><strong>Comité Regional:</strong> Transporte interno, seguridad y atención médica.</div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            {/* Footer */}
            <footer className="lpu-footer">
                <div className="footer-content">
                    <p>&copy; 2024 Liga Pólideportiva Universitaria. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
