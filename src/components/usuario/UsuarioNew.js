import React, { useState, useEffect } from 'react';
import { crearUsuarios } from '../../services/usuarioService';
import Swal from 'sweetalert2';

export const UsuarioNew = ({ handleOpenModal, listarUsuarios }) => {

    const [ valoresForm, setValoresForm ] = useState({});
    const { nombre = '', email = '', estado = '' } = valoresForm;
    
    
    const handleOnChange = ({ target }) => {
        const {name, value} = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const usuario = {
            nombre, email, estado,
        }
        console.log(usuario);
        try{
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const {data} = await crearUsuarios(usuario);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarUsuarios();
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
                        <label className="forma-label">Email</label>
                        <input type="text" name='email'
                        required
                        value={email}
                        onChange={(e) => handleOnChange(e)}
                        className="form-control"/>
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
