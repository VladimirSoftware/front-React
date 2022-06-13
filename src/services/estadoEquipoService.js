import { axiosInstance } from '../helpers/axios-config';


const getEstadoEquipo = () => {
    const resp = axiosInstance.get('estado-equipo');
    return resp;
}

const crearEstadoEquipo = (data) => {
    const resp = axiosInstance.post('estado-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

const editarEstadoEquipo = (estadoEquipoId, data) => {
    const resp = axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}

export {
    getEstadoEquipo, crearEstadoEquipo, editarEstadoEquipo
}