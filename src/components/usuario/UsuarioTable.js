import React from 'react'

export const UsuarioTable = ({ usuarios }) => {
 return (
    <table className="table">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Estado</th>
        </tr>
        </thead>
        <tbody>
        {
            usuarios.map(usuario => {
                return <tr key={usuario._id}>
                    <td>{ usuario.nombre }</td>
                    <td>{ usuario.email }</td>
                    <td>{ usuario.estado }</td>
                    </tr>
            })
        }
        </tbody>
    </table>
  )
}