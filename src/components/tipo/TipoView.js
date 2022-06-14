import React, { useState, useEffect } from 'react';
import { getTipoEquipo } from '../../services/tipoEquipoService';
import { TipoCard } from './TipoCard';
import { TipoNew } from './TipoNew';
import Swal from 'sweetalert2';
export const TipoView = () => {

  const [ tipos, setTipos ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);
  const listarTipos = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getTipoEquipo();
      console.log(data);
      setTipos(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  useEffect(() => {
    listarTipos();
  }, []);
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="container"> 
         <div className="mt-2 row row-cols-1 row-cols-md-3 g-4">
             {
              tipos.map((tipo) => {
                return <TipoCard key={tipo._id} tipo={ tipo }/>
              })
             }
        </div>
        {
          openModal ? <TipoNew 
                        handleOpenModal={ handleOpenModal }
                        listarTipos={ listarTipos }/> :
              (<button className='btn btn-light fab' onClick={handleOpenModal }> Agregar 
              &nbsp;<i className="fa-solid fa-circle-plus"></i>
              </button>)
        }
    </div>
  )
}

