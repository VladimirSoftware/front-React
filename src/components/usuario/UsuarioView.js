import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../../services/usuarioService';
import { UsarioCard } from './UsarioCard';
import { UsuarioNew } from './UsuarioNew';
import Swal from 'sweetalert2';
export const UsuarioView = () => {

  const [ usuarios, setUsuarios ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);
  const listarUsuarios = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getUsuarios();
      console.log(data);
      setUsuarios(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  useEffect(() => {
    listarUsuarios();
  }, []);
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="container"> 
         <div className="mt-2 row row-cols-1 row-cols-md-3 g-4">
             {
              usuarios.map((usuario) => {
                return <UsarioCard key={usuario._id} usuario={ usuario }/>
              })
             }
        </div>
        {
          openModal ? <UsuarioNew 
                        handleOpenModal={ handleOpenModal }
                        listarUsuarios={ listarUsuarios }/> :
              (<button className='btn btn-light fab' onClick={handleOpenModal }> Agregar 
              &nbsp;<i className="fa-solid fa-circle-plus"></i>
              </button>)
        }
    </div>
  )
}
