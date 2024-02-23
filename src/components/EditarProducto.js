import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_API_PRODUC, URL_IMAGES_PRODUC } from "../config/rutas";
import axios from "axios";

export function EditarProducto() {
  const params = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [rutaFoto, setRutaFoto] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoVieja, setFotoVieja] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    async function buscarProdPorId() {
      const res = await axios.get(URL_API_PRODUC + "buscarProductoPorId/" + params.id);
      setId(res.data.id);
      setNombre(res.data.nombre);
      setCantidad(res.data.cantidad);
      setPrecio(res.data.precio);
      setFotoVieja(res.data.foto);
      setRutaFoto(URL_IMAGES_PRODUC + res.data.foto);
    }
    buscarProdPorId();
  }, [params.id]);

  async function editarProducto(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nombre", nombre);
    formData.append("cantidad", cantidad);
    formData.append("precio", precio);
    formData.append("fotoVieja", fotoVieja);
    formData.append("foto", foto || fotoVieja);
    const res = await axios.post(URL_API_PRODUC + "editarProducto", formData, {
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
      setMensaje("Producto editado");
      navigate('/productos')
    }, 3000);

  }

  return (
    <div className="container mt-5">
      <div className="text-danger"><h3>{mensaje}</h3></div>
      <form onSubmit={editarProducto}>
        <div className="card">
          <div className="card-header">
            <h1>Editar Producto</h1>
          </div>
          <div className="card-body">
              <input type="text" name="fotoVieja"       id="fotoVieja"      value={fotoVieja} readOnly />
              <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />
              <input className="form-control mb-3" type="text" value={nombre} name="nombre" id="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} autoFocus/>
              <input className="form-control mb-3" type="text" value={cantidad} name="cantidad" id="cantidad" onChange={(e) => setCantidad(e.target.value) } placeholder="Cantidad"/>
              <input className="form-control mb-3" type="text" value={precio} name="precio" id="precio" onChange={(e) =>  setPrecio(e.target.value) } placeholder="Precio"/>
              <input className="form-control mb-3" type="file" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} placeholder="Seleccionar archivo"/>
              <div>
              <img src={rutaFoto} width={100} alt="Foto de producto" />
              </div>
          </div>
          <div className="card-footer">
            <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
          </div>
        </div>
      </form>
    </div>
  );
}
