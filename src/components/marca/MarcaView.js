import React, { useState, useEffect } from 'react';
import { getMarcas } from '../../services/marcaService';
import { MarcaCard } from './MarcaCard';
import { MarcaNew } from './MarcaNew';
import Swal from 'sweetalert2';
export const MarcaView = () => {

  const [ marcas, setMarcas ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);
  const listarMarcas = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getMarcas();
      console.log(data);
      setMarcas(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  useEffect(() => {
    listarMarcas();
  }, []);
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="container"> 
         <div className="mt-2 row row-cols-1 row-cols-md-3 g-4">
             {
              marcas.map((marca) => {
                return <MarcaCard key={marca._id} marca={ marca }/>
              })
             }
        </div>
        {
          openModal ? <MarcaNew 
                        handleOpenModal={ handleOpenModal }
                        listarMarcas={ listarMarcas }/> :
              (<button className='btn btn-light fab' onClick={handleOpenModal }> Agregar 
              &nbsp;<i className="fa-solid fa-circle-plus"></i>
              </button>)
        }
    </div>
  )
}
