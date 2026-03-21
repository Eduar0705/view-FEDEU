import Logo from '../assets/img/logoo.png'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import loginService from '../service/login.service'
import '../assets/css/login.css'


export default function Registro(){
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirPass, setConfirPass] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const success = (ms)=>{
        Swal.fire({
            icon: 'success',
            title: 'Registro Exitoso',
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

    async function regis(e) {
        e.preventDefault();
        try{
            await loginService.register(nombre,username,password,email,telefono)
            success(`Registro exitoso ${nombre}`)
            navigate('/login')
        }catch(err){
            error('Ha ocurrido un error, intente más tarde')
            console.error(err)
        }
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="main-content">
            <div className="login-container">
                <form onSubmit={regis} className='form-content'>
                    <img src={Logo} alt="LPU Logo" className='lpu-logo' />
                    

                    <div className="input-container">
                        <label>Usuario:</label>
                        <input type="text" id='username' name='username'
                        maxLength={15} placeholder='@usuario'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        />
                    </div>

                    <div className="input-container">
                        <label>Nombre Completo:</label>
                        <input type="text" id='name' name='name'
                        maxLength={50} placeholder='Leonardo Perez'
                        onChange={(e)=> setNombre(e.target.value)}
                        value={nombre}
                        />
                    </div>

                    <div className="input-container">
                        <label>Correo: </label>
                        <input type="email" name="email" id="email"
                        maxLength={50} placeholder='correo@email.com'
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        />
                    </div>

                    <div className="input-container">
                        <label>Telefono:</label>
                        <input type="text" name='telef' id='telef'
                        maxLength={15} placeholder='04145000000'
                        onChange={(e)=> setTelefono(e.target.value)}
                        value={telefono}
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

                    <div className="input-container">
                        <label>Confirme clave:</label>
                        <div className="password-input-wrapper">
                            <input id='password' name='password'
                            maxLength={15} placeholder='*********'
                            type={showPassword ? 'text' : 'password'}
                            value={confirPass}
                            onChange={(e) => setConfirPass(e.target.value)}
                            />
                            <button className="toggle-password" type="button" onClick={togglePasswordVisibility}>
                                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>

                    <button type='submit'>Registrar</button>

                    <div className="footer">
                        <a href="/">Volver</a>
                        <a href="login">Ya tienes Cuenta?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}