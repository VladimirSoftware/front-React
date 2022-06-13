import React from 'react'

export const MarcaTable = ({ marcas }) => {
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
            marcas.map(marca => {
                return <tr key={marca._id}>
                    <td>{ marca.nombre }</td>
                    <td>{ marca.estado }</td>
                    </tr>
            })
        }
        </tbody>
    </table>
  )
}
