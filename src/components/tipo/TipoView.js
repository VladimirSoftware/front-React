import React, { useState, useEffect } from 'react';
import { getTipoEquipo, crearTipoEquipo, editarTipoEquipo } from '../../services/tipoEquipoService';
import { TipoTable } from './TipoTable';

export const TipoView = () => {

  const [ tipos, setTipos ] = useState([]);
  const [ valoresForm, setValoresForm ] = useState({});
  const { nombre = '', estado = '' } = valoresForm;

  const listarTipos = async () => {
    try {
      const resp = await getTipoEquipo();
      console.log(resp.data);
      setTipos(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const nuevoTipo = async (tipo) => {
    try {
      const resp = await crearTipoEquipo(tipo);
      console.log(resp.data);
      listarTipos();
      setValoresForm({ nombre: '', estado: '' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearTipo = (e) => {
    e.preventDefault();
    nuevoTipo(valoresForm);
  }

  useEffect(() => { listarTipos(); }, []);

  return (
    <div className='tableta'>
    <div className='container'>
      <form onSubmit={ (e) => handleCrearTipo(e) }>
        <legend>Crear / Editar Tipo</legend>
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
      <TipoTable tipos={ tipos } />
  </div>
  </div>
  )
}
