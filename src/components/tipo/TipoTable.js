import React from 'react'

export const TipoTable = ({ tipos }) => {
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
            tipos.map(tipo => {
                return <tr key={tipo._id}>
                    <td>{ tipo.nombre }</td>
                    <td>{ tipo.estado }</td>
                    </tr>
            })
        }
        </tbody>
    </table>
  )
}