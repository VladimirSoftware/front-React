import React from 'react'

export const EstadoTable = ({ estados }) => {
 return (
    <table className="table">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Estado</th>
        </tr>
        </thead>
        <tbody>
        {
            estados.map(estado => {
                return <tr key={estado._id}>
                    <td>{ estado.nombre }</td>
                    <td>{ estado.estado }</td>
                    </tr>
            })
        }
        </tbody>
    </table>
  )
}
