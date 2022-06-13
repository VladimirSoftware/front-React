import React, { useState, useEffect } from 'react';
import { getMarcas, crearMarca, editarMarca } from '../../services/marcaService';
import { MarcaTable } from './MarcaTable';

export const MarcaView = () => {

  const [ marcas, setMarcas ] = useState([]);
  const [ valoresForm, setValoresForm ] = useState({});
  const { nombre = '', estado = '' } = valoresForm;

  const listarMarcas = async () => {
    try {
      const resp = await getMarcas();
      console.log(resp.data);
      setMarcas(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const nuevaMarca = async (marca) => {
    try {
      const resp = await crearMarca(marca);
      console.log(resp.data);
      listarMarcas();
      setValoresForm({ nombre: '', estado: '' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearMarca = (e) => {
    e.preventDefault();
    nuevaMarca(valoresForm);
  }

  useEffect(() => { listarMarcas(); }, []);

  return (
    <div className='tableta'>
    <div className='container'>
      <form onSubmit={ (e) => handleCrearMarca(e) }>
        <legend>Crear / Editar Marca</legend>
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
      <MarcaTable marcas={ marcas } />
  </div>
  </div>
  )
}
