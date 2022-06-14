import React from 'react'
import {Link} from 'react-router-dom'

export const TipoCard = (props) => {
    const { tipo } = props;
  return (
    <table className="table">
        
        <tbody>
        {
            <tr key={tipo._id}>
                    <td>{` ${tipo.nombre}`}</td>
                    <td>{`Estado  : ${tipo.estado}`}</td>
                    <td>{`Fecha de Ingreso : ${tipo.fechaCreacion}`}</td>
                    <td><button className="btn"> <Link to={`tipos/edit/${tipo._id}`}>Editar</Link></button></td>
                    </tr>
            
        }
        </tbody>
    </table>
  )
}
