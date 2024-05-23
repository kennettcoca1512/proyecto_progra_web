import { Navigate, useNavigate } from "react-router-dom";
import { useItemId } from '../../Context/ItemIdContext';
import React, { useState } from 'react';

export default function SectionCardUR(props){

  const [estado, setEstado] = useState(props.estado);
  const handleToggleStatus = () => {
    const nuevoEstado = estado === 'Activo' ? 'Inactivo' : 'Activo';
    setEstado(nuevoEstado);
    alert(`Estado de usuario ${props.id} cambiado a ${nuevoEstado}`);
  };
    const trStyle = {
        paddingLeft : '20px',
        textAlign: 'center',

        
    }
    const trStyleUR = {
      marginTop: '15px',
    }
    const navigate = useNavigate();
    const { setItemIdContext } = useItemId();
    const handleItemClick = (itemId) => {
        console.log('Item ID:', itemId);
        setItemIdContext(itemId);
        navigate(`/items/${itemId}`);
      };

  return<>
    <tr key={props.id} style={trStyleUR} >
      <td style={trStyle}>{props.id}</td>
      <td style={trStyle}>{props.nombre}</td>
      <td style={trStyle}>{props.apellido}</td>
      <td style={trStyle}>{props.correo}</td>
      <td style={trStyle}>{props.fecha}</td>
      <td style={trStyle}>{estado}</td>
      <td style={trStyle}>
          <button onClick={() => handleItemClick(props.id)}>Ver</button>
          {' | '}
          <button onClick={handleToggleStatus}>
            {estado === 'Activo' ? 'Desactivar' : 'Activar'}
          </button>
        </td>
    </tr>     
    </>
}