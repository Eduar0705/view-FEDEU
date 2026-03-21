import axios from 'axios';

const API_URL_LOCAL = 'http://localhost:3001/api';
const API_URL_NUBE = 'https://backfedeu.up.railway.app/api';

let cachedUrl = null;

async function obtenerUrlApi() {
    if (cachedUrl) return cachedUrl;
    try {
        const respuesta = await fetch(`${API_URL_LOCAL}/ping`, { 
            method: 'GET',
            signal: AbortSignal.timeout(2000) 
        });

        if (respuesta.ok) {
            cachedUrl = API_URL_LOCAL;
            return API_URL_LOCAL;
        }
    } catch (error) {
        console.log('Local no disponible, usando la API en la nube',error);
    }
    cachedUrl = API_URL_NUBE;
    return API_URL_NUBE;
}

const api = axios.create();

// Interceptor para configurar el baseURL dinámicamente y añadir el token
api.interceptors.request.use(async (config) => {
    // Configurar baseURL si no está definida
    if (!config.baseURL || config.baseURL === '') {
        config.baseURL = await obtenerUrlApi();
    }

    // Añadir token de autenticación si existe
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
