import { axiosInstance } from "../helpers/axios-config";

const getUsuarios = () => {
    const resp = axiosInstance.get('usuario');
    return resp;
}

const crearUsuarios = (data) => {
    const resp = axiosInstance.post('usuario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const editarUsuarios = (usuarioId, data) => {
    const resp = axiosInstance.put(`usuario/${usuarioId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}



const getUsuarioPorId = (usuarioId) => {
    return axiosInstance.get(`usuario/${usuarioId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });

}

export {
    getUsuarios, crearUsuarios, editarUsuarios, getUsuarioPorId
}
