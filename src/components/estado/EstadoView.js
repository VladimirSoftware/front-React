import React, { useState, useEffect } from 'react';
import { getEstadoEquipo, crearEstadoEquipo, editarEstadoEquipo } from '../../services/estadoEquipoService';
import { EstadoTable } from './EstadoTable';

export const EstadoView = () => {

  const [ estados, setEstados ] = useState([]);
  const [ valoresForm, setValoresForm ] = useState({});
  const { nombre = '', estado = '' } = valoresForm;

  const listarEstados = async () => {
    try {
      const resp = await getEstadoEquipo();
      console.log(resp.data);
      setEstados(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const nuevoEstado = async (estado) => {
    try {
      const resp = await crearEstadoEquipo(estado);
      console.log(resp.data);
      listarEstados();
      setValoresForm({ nombre: '', estado: '' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearEstado = (e) => {
    e.preventDefault();
    nuevoEstado(valoresForm);
  }

  useEffect(() => { listarEstados(); }, []);

  return (
    <div className='tableta'>
    <div className='container'>
      <form onSubmit={ (e) => handleCrearEstado(e) }>
        <legend>Crear / Editar Estado</legend>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input required minLength={6} name='nombre' value={nombre} type="text" className="form-control" 
                placeholder="Escriba un nombre" onChange={ (e) => handleOnChange(e) } />
        </div>
        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select required name='estado' value={estado} 
                className="form-select" onChange={ (e) => handleOnChange(e) }>
            <option defaultValue value="">--SELECCIONAR--</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
        </select>
        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>
      <EstadoTable estados={ estados } />
  </div>
  </div>
  )
}
