import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import { getInventariosPorId, editarInventario } from '../../services/inventarioService';
import { getUsuarios } from '../../services/usuarioService';
import { getMarcas } from '../../services/marcaService';
import { getTipoEquipo } from '../../services/tipoEquipoService';
import { getEstadoEquipo } from '../../services/estadoEquipoService';
import Swal from 'sweetalert2';

export const InventarioUpdate = () => {
    const { inventarioId = '' } = useParams();
    const [inventario, setInventario ] = useState({});
    const [ usuarios, setUsuarios ] = useState([]);
    const [ marcas, setMarcas ] = useState([]);
    const [ tipos, setTipos ] = useState([]);
    const [ estados, setEstados ] = useState([]);
    const [ valoresForm, setValoresForm ] = useState({});
    const { serial = '', modelo = '', descripcion = '', foto = '', fechaCompra = '', precio = '', usuario, marca, tipo, estado } = valoresForm;



    const getInventario = async () => {
        try{
            const {data} = await getInventariosPorId(inventarioId);
            setInventario(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getInventario();
    }, [ inventarioId ]);

    const listarUsuarios = async () => {
        try {
              const {data} = await getUsuarios();
               setUsuarios(data);
         } catch (error) {
             console.log(error);
         }
     }
     useEffect( () => {
         listarUsuarios();
     }, []);
     
     const listarMarcas = async () => {
          try {
             const {data} = await getMarcas();
             setMarcas(data);
         } catch (error) {
            console.log(error);
         }
     }
     useEffect(() => {
         listarMarcas();
     }, []);
     
     const listarTipos = async () => {
          try {
             const {data} = await getTipoEquipo();
             setTipos(data);
         } catch (error) {
            console.log(error);
         }
     }
     useEffect(() => {
         listarTipos();
     }, []);
 
     const listarEstados = async () => {
          try {
             const {data} = await getEstadoEquipo();
             setEstados(data);
         } catch (error) {
            console.log(error);
         }
     }
     useEffect(() => {
         listarEstados();
     }, []);

     useEffect(() => {
        setValoresForm({
            serial: inventario.serial,
            modelo: inventario.modelo,
            descripcion: inventario.descripcion,
            foto: inventario.foto,
            fechaCompra: inventario.fechaCompra,
            precio: inventario.precio,
            usuario: inventario.usuario,
            marca: inventario.marca,
            tipo: inventario.tipoEquipo,
            estado: inventario.estadoEquipo,
        });
    }, [inventario]);

    const handleOnChange = ({ target }) => {
        const {name, value} = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const inventario = {
            serial, modelo, descripcion, foto,
            fechaCompra, precio,
            usuario: {
                _id: usuario
            },
            marca: {
                _id: marca
            },
            tipoEquipo: {
                _id: tipo
            },
            estadoEquipo: {
                _id: estado
            },

        }
        try{
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const {data} = await editarInventario(inventarioId, inventario);
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
                    <h5 className="card-title">Detalle activo </h5>
            </div> 
            <div className="card-body">
               <div className="row">
                   <div className="col-md-4">
                      <img src={inventario?.foto} />
                   </div> 
                   <div className="col-md-8">
                        <form onSubmit={(e) => handleOnSubmit(e)}>
                              <div className="row">
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Serial</label>
                                          <input type="text" name='serial'
                                              required
                                              value={serial}
                                              onChange={(e) => handleOnChange(e)}
                                              className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Modelo</label>
                                          <input type="text" name='modelo'
                                              onChange={(e) => handleOnChange(e)}
                                              required
                                              value={modelo} className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Descripción</label>
                                          <input type="text" name='descripcion'
                                              onChange={(e) => handleOnChange(e)}
                                              required
                                              value={descripcion} className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Foto</label>
                                          <input type="url" name='foto'
                                              onChange={(e) => handleOnChange(e)}
                                              required
                                              value={foto} className="form-control" />
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Fecha Compra</label>
                                          <input type="date" name='fechaCompra'
                                              onChange={(e) => handleOnChange(e)}
                                              required
                                              value={fechaCompra} className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Precio</label>
                                          <input type="number" name='precio'
                                              onChange={(e) => handleOnChange(e)}
                                              required
                                              value={precio} className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Conductor</label>
                                          <select className="form-select"
                                              required
                                              onChange={(e) => handleOnChange(e)}
                                              name='usuario'
                                              value={usuario}>
                                              <option value="">Seleccione</option>
                                              {
                                                  usuarios.map(({ _id, nombre }) => {
                                                      return <option key={_id} value={_id}>{nombre}</option>
                                                  })
                                              }
                                          </select>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Marca</label>
                                          <select className="form-select"
                                              required
                                              onChange={(e) => handleOnChange(e)}
                                              name='marca'
                                              value={marca}>
                                              <option value="">Seleccione</option>
                                              {
                                                  marcas.map(({ _id, nombre }) => {
                                                      return <option key={_id} value={_id}>{nombre}</option>
                                                  })
                                              }
                                          </select>
                                      </div>
                                  </div>
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Tipo Equipo</label>
                                          <select className="form-select"
                                              required
                                              onChange={(e) => handleOnChange(e)}
                                              name='tipo'
                                              value={tipo}>
                                              <option value="">Seleccione</option>
                                              {
                                                  tipos.map(({ _id, nombre }) => {
                                                      return <option key={_id} value={_id}>{nombre}</option>
                                                  })
                                              }
                                          </select>
                                      </div>
                                  </div>
                                  <div className="col">
                                      <div className='mb-3'>
                                          <label className="forma-label">Estado Equipo</label>
                                          <select className="form-select"
                                              required
                                              onChange={(e) => handleOnChange(e)}
                                              name='estado'
                                              value={estado}>
                                              <option value="">Seleccione</option>
                                              {
                                                  estados.map(({ _id, nombre }) => {
                                                      return <option key={_id} value={_id}>{nombre}</option>
                                                  })
                                              }
                                          </select>
                                      </div>
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
