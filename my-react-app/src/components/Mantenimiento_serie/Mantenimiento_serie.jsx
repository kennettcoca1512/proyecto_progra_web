import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Productos_series } from '../../data/Productos_series';
import Tabla_producto from './Tabla_producto';
import './Mantenimiento_serie.css';


const MantenimientoSerie = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [producto, setProducto] = useState({
        nombreProd: '',
        desc: '',
        marcaProd: '',
        graficaProd: '',
        ramProd: '',
        stockProd: '',
        precioProd: '',
        imagenProd: null,
    });

    useEffect(() => {
        if (id) {
            const productos = JSON.parse(localStorage.getItem('productos')) || [];
            const productoEncontrado = productos.find(p => p.id.toString() === id);
            if (productoEncontrado) {
                setProducto(productoEncontrado);
            }
        }
    }, [id]);

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setProducto({...producto, imagenProd: URL.createObjectURL(file)});
    };

    const handleClick = () => {
        const productos = JSON.parse(localStorage.getItem('productos')) || [];
        if (id) {
            const updatedProductos = productos.map(p => p.id.toString() === id ? { ...producto } : p);
            localStorage.setItem('productos', JSON.stringify(updatedProductos));
        } else {
            const newProduct = {
                id: productos.length + 1,
                ...producto,
                fechaRegistro: new Date().toLocaleDateString(),
                estado: 'Disponible'
            };
            productos.push(newProduct);
            localStorage.setItem('productos', JSON.stringify(productos));
        }
        navigate('/Listado_series');
    };

    return (
        <section className='Mant_serie'>
             <article class="Admin">
                <div id="Admindiv">Admin</div>
                <ul class="ListaAdmin">
                    <li>Dashboard</li><br></br>
                    <li>Usuarios registrados</li><br></br>
                    <li>series</li><br></br>
                    <li>Órdenes</li><br></br>
                    <li>series más vendidos</li><br></br>
                    <li>Series</li><br></br>
                </ul>

            </article>
        
        <section  style={styles.section}>

             
            <div style={styles.tituloPagina}>
                <h3 style={styles.titulo}>{id ? 'Editar producto' : 'Agregar producto'}</h3>
            </div>
            <div style={styles.formAgregarProductos}>
                <div style={styles.agregarImagen}>
                    <div style={styles.imagen}>
                        {producto.imagenProd && <img src={producto.imagenProd} alt="Imagen seleccionada" style={styles.imagenProd} />}
                    </div>
                    <div style={styles.divBotonAgregar}>
                        <label htmlFor="inputImagen" style={styles.botonAgregarImagen}>Cargar imagen</label>
                        <input
                            type="file"
                            id="inputImagen"
                            name="inputImagen"
                            style={{ display: 'none' }}
                            onChange={handleImagenChange}
                        />
                    </div>
                </div>
                <div style={styles.agregarDatos}>
                    <div style={styles.agregarDatos1}>
                        
                        
                    </div>
                    <div style={styles.agregarDatos2}>
                        <div style={styles.agregarDatos22}>
                            <label htmlFor="marcaProd" style={styles.nombreCampo}>Nombre:</label>
                            <input
                                type="text"
                                id="marcaProd"
                                style={styles.campo}
                                value={producto.marcaProd}
                                onChange={e => setProducto({ ...producto, marcaProd: e.target.value })}
                            />
                        </div>
                    
                        <div style={styles.agregarDatos22}>
                            <label htmlFor="descrip" style={styles.nombreCampo}>Descripción:</label>
                            <input
                                type="text"
                                id="descrip"
                                style={styles.campo}
                                value={producto.descrip}
                                onChange={e => setProducto({ ...producto, descrip: e.target.value })}
                            />
                        </div>
                       
                        
                        
                        
                    </div>
                </div>
            </div>

            <Tabla_producto/>
            
            <div style={styles.divBotonAgregar}>
                <button style={styles.botonAgregar} type="button" onClick={handleClick}>{id ? 'Guardar cambios' : 'Agregar producto'}</button>
            </div>
        </section>
        </section>
    );
}

    const styles = {
        section: {
            backgroundColor: 'white',
            width: '100%',
            margin: '10px',
            padding: '0px',
            display: 'flex',
            flexDirection: 'column',
        },
        tituloPagina: {
            marginBottom: '20px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'grey',
        },
        titulo: {
            margin: '15px',
            color: 'black',
        },
        formAgregarProductos: {
            display: 'flex',
        },
        agregarImagen: {
            marginRight: '10px',
            marginBottom: '0px',
            width: '30%',
            height: '100%',
        },
        imagen: {
            width: '100%',
            height: 'auto',
            display: 'block',
            marginBottom: '10px',
            marginRight: '20px',
            backgroundColor: 'black',
        },
        imagenProd: {
            width: '100%',
            height: 'auto',
            maxHeight: '200px', // Limitar la altura máxima de la imagen
            objectFit: 'contain', // Asegurar que la imagen se ajuste dentro del contenedor
        },
        botonAgregarImagen: {
            marginLeft: '0px',
            padding: '8px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        agregarDatos: {
            marginBottom: '0px',
        },
        agregarDatos1: {
            marginBottom: '0px',
        },
        agregarDatos2: {
            marginBottom: '0px',
            display: 'flex',
            flexWrap: 'wrap',
        },
        agregarDatos22: {
            width: '30%',
            marginRight: '20px',
            marginLeft: '0px',
        },
        nombreCampo: {
            display: 'block',
            marginBottom: '0px',
            color: 'black',
        },
        campo: {
            width: '100%',
            padding: '5px',
            borderRadius: '5px',
            color: 'black',
            marginBottom: '2px',
            border: '1.5px solid black',
            backgroundColor: 'white',
            boxSizing: 'border-box',
        },
        divBotonAgregar: {
            alignSelf: 'flex-end',
        },
        botonAgregar: {
            marginLeft: '5px',
            padding: '8px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    export default MantenimientoSerie;
