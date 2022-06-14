import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import { getEstadoPorId, editarEstadoEquipo } from '../../services/estadoEquipoService';

import Swal from 'sweetalert2';

export const EstadoUpdate = () => {
    const { estadoId = '' } = useParams();

    const [ estados, setEstados ] = useState([]);
    
    const [ valoresForm, setValoresForm ] = useState({});
    const { nombre = '', estado = '' } = valoresForm;



    const getEstados = async () => {
        try{
            const {data} = await getEstadoPorId(estadoId);
            setEstados(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEstados();
    }, [ estadoId ]);

    
     useEffect(() => {
        setValoresForm({
            nombre: estados.nombre,
            estado: estados.estado,
            
        });
    }, [estados]);

    const handleOnChange = ({ target }) => {
        const {name, value} = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const estados = {
            nombre, estado

        }
        try{
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const {data} = await editarEstadoEquipo(estadoId, estados);
            Swal.close();
        } catch (error) {
            console.log(error);
            Swal.close();
            Swal.fire('Error', 'Ocurrio un error, por favor intente de nuevo', 'error');
        }
    }
    
  return (
    <div className='container-fluid mt-3 mb-2'>
        <div className="card">
            <div className="card-header">
                    <h5 className="card-title">Detalle Estado </h5>
            </div> 
            <div className="card-body">
               <div className="row">
                   
                   <div className="col-md-8">
                        <form onSubmit={(e) => handleOnSubmit(e)}>
                              <div className="row">
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Nombre</label>
                                          <input type="text" name='nombre'
                                              required
                                              value={nombre}
                                              onChange={(e) => handleOnChange(e)}
                                              className="form-control" />
                                      </div>
                                  </div>
                                 
                                      <div className='mb-3'>
                                          <label className="form-label">Estado</label>
                                          <select required name='estado' value={estado}
                                              className="form-select" onChange={(e) => handleOnChange(e)}>
                                              <option defaultValue value="">--SELECCIONAR--</option>
                                              <option value="Activo">Activo</option>
                                              <option value="Inactivo">Inactivo</option>
                                          </select>
                                      </div>
                                  
                                 
                                  
                                  <div className='row'>
                                      <div className='col'>
                                          <button>Guardar</button>
                                      </div>
                                  </div>
                              </div>
                        </form>
                   </div> 
               </div> 
             </div>                 
        </div>
    </div>
  )
}
