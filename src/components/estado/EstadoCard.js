import React from 'react'
import {Link} from 'react-router-dom'

export const EstadoCard = (props) => {
    const { estado } = props;
  return (
    <table className="table">
        
    <tbody>
    {
        <tr key={estado._id}>
                <td>{` ${estado.nombre}`}</td>
                <td>{`Estado  : ${estado.estado}`}</td>
                <td>{`Fecha de Ingreso : ${estado.fechaCreacion}`}</td>
                <td><button className="btn"> <Link to={`estados/edit/${estado._id}`} >Editar</Link></button></td>
                </tr>
        
    }
    </tbody>
</table>
  )
}
