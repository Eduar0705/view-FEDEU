import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../../service/login.service';

export default function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = loginService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser.user || currentUser);
        } else {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="main-container" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
            <h1>Hola Mundo</h1>
            {user ? (
                <div className="welcome-section">
                    <p>Bienvenido, <strong>{user.nombre || user.usuario}</strong>!</p>
                    <p>Sesión iniciada correctamente.</p>
                </div>
            ) : (
                <p>Cargando datos del usuario...</p>
            )}
        </div>
    )
}