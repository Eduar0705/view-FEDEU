import Logo from '../assets/img/logoo.png'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/login.css'


export default function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const success = (ms)=>{
        Swal.fire({
            icon: 'success',
            title: 'Login Exitoso',
            text: ms,
            confirmButtonText: 'Aceptar'
        })
    }

    const error = (ms)=>{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: ms,
            confirmButtonText: 'Aceptar'
        })
    }


    function handleLogin(e){
        e.preventDefault();
        if(username === ''){
            error('Ingrese el usuario')
            return
        }
        if(password === ''){
            error('Ingrese la contraseña')
            return
        }

        success('Bienvenido')
        navigate('/home')
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="main-content">
            <div className="login-container">
                <form onSubmit={handleLogin} className='form-content'>
                    <img src={Logo} alt="LPU Logo" className="lpu-logo" />
                    <h2>Inicio de Sesión</h2>
                    <div className="input-container">
                        <label>Usuario:</label>
                        <input type="text" id='username' name='username'
                        maxLength={15} placeholder='@usuario'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        />
                    </div>

                    <div className="input-container">
                        <label>Clave:</label>
                        <div className="password-input-wrapper">
                            <input id='password' name='password'
                            maxLength={15} placeholder='*********'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="toggle-password" type="button" onClick={togglePasswordVisibility}>
                                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>
                    <button type="submit">Login</button>

                    <div className="footer">
                        <a href="/">Volver</a>
                        <a href="#">Olvidaste tu clave?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}