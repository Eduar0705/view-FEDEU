import api from './api.service.js';

const login = async (username, password)=>{
    try {
        const respuesta = await api.post('/auth/login', { usuario: username, pass: password });

        if(respuesta.data.token){
            localStorage.setItem('user', JSON.stringify(respuesta.data))
        }
        return respuesta.data;
    } catch(error){
        if (error.response && error.response.data) {
            throw error.response.data;
        }
        throw new Error("No se pudo conectar con el servidor. Verifica que el backend esté en ejecución.");
    }
}

const logout = () => {
    localStorage.removeItem('user');
};

const register = async (nombre, usuario, pass, email, telefono) => {
    try {
        const response = await api.post('/auth/register', {
        nombre,
        usuario,
        pass,
        email,
        telefono,
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw error.response.data;
        }
        throw new Error("No se pudo conectar con el servidor. Verifica que el backend esté en ejecución.");
    }
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const loginService = {
    login,
    logout,
    register,
    getCurrentUser,
};

export default loginService;