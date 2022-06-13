import { axiosInstance } from '../helpers/axios-config';


const getInventarios = () => {
    return axiosInstance.get('inventario', {
        headers: {
            'Content-type': 'application/json'
        }
    });

}

const crearInventario = (data) => {
    const resp = axiosInstance.post('inventario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const editarInventario = (inventarioId, data) => {
    const resp = axiosInstance.put(`inventario/${inventarioId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const getInventariosPorId = (inventarioId) => {
    return axiosInstance.get(`inventario/${inventarioId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });

}


export {
    getInventarios, crearInventario, editarInventario, getInventariosPorId
}