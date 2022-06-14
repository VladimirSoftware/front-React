import { axiosInstance } from '../helpers/axios-config';


const getTipoEquipo = () => {
    const resp = axiosInstance.get('tipo-equipo');
    return resp;
}

const crearTipoEquipo = (data) => {
    const resp = axiosInstance.post('tipo-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const editarTipoEquipo = (tipoEquipoId, data) => {
    const resp = axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const getTipoPorId = (tipoId) => {
    return axiosInstance.get(`tipo-equipo/${tipoId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });

}

export {
    getTipoEquipo, crearTipoEquipo, editarTipoEquipo, getTipoPorId
}