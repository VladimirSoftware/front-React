import React, { useState, useEffect } from 'react';
import { getEstadoEquipo } from '../../services/estadoEquipoService';
import { EstadoCard } from './EstadoCard';
import { EstadoNew } from './EstadoNew';
import Swal from 'sweetalert2';
export const EstadoView = () => {

  const [ estados, setEstados ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);
  const listarEstados = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getEstadoEquipo();
      console.log(data);
      setEstados(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  useEffect(() => {
    listarEstados();
  }, []);
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="container"> 
         <div className="mt-2 row row-cols-1 row-cols-md-3 g-4">
             {
              estados.map((estado) => {
                return <EstadoCard key={estado._id} estado={ estado }/>
              })
             }
        </div>
        {
          openModal ? <EstadoNew 
                        handleOpenModal={ handleOpenModal }
                        listarEstados={ listarEstados }/> :
              (<button className='btn btn-light fab' onClick={handleOpenModal }> Agregar 
              &nbsp;<i className="fa-solid fa-circle-plus"></i>
              </button>)
        }
    </div>
  )
}

