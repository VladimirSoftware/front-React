import React, { useState, useEffect } from 'react';
import { getUsuarios, crearUsuarios} from '../../services/usuarioService';
import { UsuarioTable } from './UsuarioTable';

export const UsuarioView = () => {

  const [ usuarios, setUsuarios ] = useState([]);
  const [ valoresForm, setValoresForm ] = useState({});
  const { nombre = '', email = '',  estado = '' } = valoresForm;

  const listarUsuarios = async () => {
    try {
      const resp = await getUsuarios();
      console.log(resp.data);
      setUsuarios(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const nuevoUsuario = async (usuario) => {
    try {
      const resp = await crearUsuarios(usuario);
      console.log(resp.data);
      listarUsuarios();
      setValoresForm({ nombre: '', email: '',estado: '' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleCrearMarca = (e) => {
    e.preventDefault();
    nuevoUsuario(valoresForm);
  }

  useEffect(() => { listarUsuarios(); }, []);

  return (
    <div className='tableta'>
      <div className='container'>
        <form onSubmit={(e) => handleCrearMarca(e)}>
          <legend>Crear / Editar Usuario</legend>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input required minLength={6} name='nombre' value={nombre} type="text" className="form-control"
              placeholder="Escriba un nombre" onChange={(e) => handleOnChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input required minLength={6} name='email' value={email} type="text" className="form-control"
              placeholder="Escriba un correo" onChange={(e) => handleOnChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select required name='estado' value={estado}
              className="form-select" onChange={(e) => handleOnChange(e)}>
              <option defaultValue value="">--SELECCIONAR--</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <button className="btn btn-primary">Guardar</button>
        </form>
        <UsuarioTable usuarios={usuarios} />
      </div>
    </div>
  )
}
