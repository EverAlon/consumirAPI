import axios from "axios";
import { useState } from "react";
import { URL_API } from "../config/rutas"
import { useNavigate } from "react-router-dom";

export function Nuevo() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [foto, setFoto] = useState(null);
  const [mensaje, setMensaje] = useState("");

  async function guardarDatos(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("usuario", usuario);
    formData.append("password", password);
    formData.append("foto", foto);

    const res = await axios.post(URL_API + "nuevoUsuario", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });


    console.log(res);
    setNombre("");
    setUsuario("");
    setPassword("");
    setFoto(null);
    setMensaje(res.data);
    setTimeout(() => {
      setMensaje("Usuario Registrado");
      navigate('/')
    }, 3000);
  }

  return (
    <div className="container mt-5">
      <form onSubmit={guardarDatos}>
        <h4>{mensaje}</h4>
        <div className="card">
          <div className="card-header">
            <h1>Nuevo Usuario</h1>
          </div>
          <div className="card-body">
            <input className="form-control mb-3" type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input className="form-control mb-3" type="text" name="usuario" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" />
            <input className="form-control mb-3" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input className="form-control mb-3" type="file" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
          </div>
          <div className="card-footer">
            <button className="form-control btn btn-primary" type="submit">Guardar Usuario</button>
          </div>
        </div>
      </form>
    </div>
  );
}
