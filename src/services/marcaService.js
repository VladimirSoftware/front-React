import { axiosInstance } from '../helpers/axios-config';

// GET http://localhost:4000/marca
// POST http://localhost:4000/marca
// PUT http://localhost:4000/marca

const getMarcas = () => {
    const resp = axiosInstance.get('marca');
    return resp;
}

const crearMarca = (data) => {
    const resp = axiosInstance.post('marca', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const editarMarca = (marcaId, data) => {
    const resp = axiosInstance.put(`marca/${marcaId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

export {
    getMarcas, crearMarca, editarMarca
}
