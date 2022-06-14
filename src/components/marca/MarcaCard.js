import React from 'react'
import {Link} from 'react-router-dom'

export const MarcaCard = (props) => {
    const { marca } = props;
  return (
<table className="table">
        
        <tbody>
        {
            <tr key={marca._id}>
                    <td>{` ${marca.nombre}`}</td>
                    <td>{`Estado  : ${marca.estado}`}</td>
                    <td>{`Fecha de Ingreso : ${marca.fechaCreacion}`}</td>
                    <td><button className="btn"> <Link to={`marcas/edit/${marca._id}`} >Editar</Link></button></td>
                    </tr>
            
        }
        </tbody>
    </table>
  )
}
