/*import React from 'react';
import { useParams } from 'react-router-dom';
import { dataseries } from '../../data/series';
const SerieDetail = () => {
  const { id } = useParams();
  const serie = dataseries.find((serie) => serie.id === id);

  if (!serie) {
    return <div>Serie no encontrada</div>;
  }

  return (
    <div>
      <h2>{serie.marcaProd}</h2>
      <img src={serie.imagen} alt={serie.marcaProd} style={{ width: '200px', height: '200px' }} />
      <p>{serie.descrip}</p>
      <p>Stock: {serie.stockProd}</p>
      <p>Fecha de Registro: {serie.fechaRegistro}</p>
      {/* Aquí puedes agregar más campos si es necesario }
    </div>
  );
};

export default SerieDetail;*/
import React from 'react';
import './DetalleSerie.css'; // Asegúrate de crear este archivo CSS
import { dataseries } from '../../data/series';
import MenuNavAdmin from '../MenuNavAdmin/MenuNavAdmin';
import Modal from './Modal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const Detalle_serie = () => {
  // Obtener el primer elemento de dataseries como ejemplo
  const { id } = useParams();
  const serie = dataseries.find((serie) => serie.id === id);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const styleModal = {
    display: 'flex',
  };

  return (<>
    <div className="serie-form">
      <h1>Detalle Serie</h1>
      <div className='serie-detalle'>
        <div className="form-group">
            <label htmlFor="imagen">Agregar Imagen</label>
            <img src={serie.imagen} alt={serie.marcaProd} className="image-preview" />
            <input type="file" />
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" defaultValue={serie.marcaProd} />
        
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" defaultValue={serie.descrip}></textarea>
        
        
      <div className="product-list">
        <h2>Productos en la serie</h2>
        <button onClick={handleOpenModal}>+</button>
        <Modal show={showModal} onClose={handleCloseModal}>
        <p>Agregar producto</p>
        {/* Aquí puedes agregar contenido adicional para el modal */}
        <div style={styleModal} >
            <input type="text" placeholder='buscar producto'/>
            <button>Buscar</button>
        </div>
        

        <button onClick={handleCloseModal}>Cerrar</button>
      </Modal>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {serie.laptopInfo.map((product) => (
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.description}</td>
                <td><button>Remover</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <button className="save-button">Guardar</button>
    </div>
    </div>
    
    </div>
    </> );
};

export default Detalle_serie;
