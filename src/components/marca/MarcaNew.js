import React, { useState, useEffect } from 'react';
import { crearMarca } from '../../services/marcaService';
import Swal from 'sweetalert2';

export const MarcaNew = ({ handleOpenModal, listarMarcas }) => {

    const [ valoresForm, setValoresForm ] = useState({});
    const { nombre = '', estado = '' } = valoresForm;
    
    
    const handleOnChange = ({ target }) => {
        const {name, value} = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const marca = {
            nombre, estado,
        }
        console.log(marca);
        try{
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const {data} = await crearMarca(marca);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarMarcas();
        } catch (error) {
            console.log(error);
            Swal.close();
            Swal.fire('Error', 'Ocurrio un error, por favor intente de nuevo', 'error');
        }
    }


  return (
    <div className='sidebar'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='sidebar-header'>
                         <h3>Nueva Marca</h3>
                         <i className="fa-solid fa-xmark" onClick={ handleOpenModal }></i>
                    </div>
                </div>
            </div>
            <div className='row'>
                <hr/>
            </div>
        </div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="row">
                <div className="col">
                    <div className='mb-3'>
                        <label className="forma-label">Nombre</label>
                        <input type="text" name='nombre'
                        required
                        value={nombre}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control"/>
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
  )
}
