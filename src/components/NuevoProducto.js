import axios from "axios";
import { useState } from "react";
import { URL_API_PRODUC } from "../config/rutas"
import { useNavigate } from "react-router-dom";

export function NuevoProducto() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [foto, setFoto] = useState(null);
  const [mensaje, setMensaje] = useState("");

  async function guardarDatos(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("cantidad", precio);
    formData.append("precio", cantidad);
    formData.append("foto", foto);

    const res = await axios.post(URL_API_PRODUC + "nuevoProducto", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });


    console.log(res);
    setNombre("");
    setCantidad("");
    setPrecio("");
    setFoto(null);
    setMensaje(res.data);
    setTimeout(() => {
      setMensaje("Usuario Registrado");
      navigate('/productos');
    }, 3000);
  }

  return (
    <div className="container mt-5">
      <form onSubmit={guardarDatos}>
        <h4>{mensaje}</h4>
        <div className="card">
          <div className="card-header">
            <h1>Nuevo Producto</h1>
          </div>
          <div className="card-body">
            <input className="form-control mb-3" type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input className="form-control mb-3" type="text" name="cantidad" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad" />
            <input className="form-control mb-3" type="text" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" />
            <input className="form-control mb-3" type="file" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
          </div>
          <div className="card-footer">
            <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
          </div>
        </div>
      </form>
    </div>
  );
}
