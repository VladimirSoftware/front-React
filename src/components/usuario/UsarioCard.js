import React from 'react'
import {Link} from 'react-router-dom'

export const UsarioCard = (props) => {
    const { usuario } = props;
  return (
    <table className="table">
        
        <tbody>
        {
            <tr key={usuario._id}>
                    <td>{` ${usuario.nombre}`}</td>
                    <td>{`Email : ${usuario.email}`}</td>
                    <td>{`Estado  : ${usuario.estado}`}</td>
                    <td>{`Fecha de Ingreso : ${usuario.fechaCreacion}`}</td>
                    <td><button className="btn"> <Link to={`usuarios/edit/${usuario._id}`} >Editar</Link></button></td>
                    </tr>
            
        }
        </tbody>
    </table>
  )
}
