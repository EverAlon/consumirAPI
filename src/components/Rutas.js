import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Menu } from "./Menu";
import { Inicio } from "./Inicio";
import { Nuevo } from "./Nuevo";
import { EditarUsuario } from "./Editar";
import { BorrarUsuario } from "./Borrar";
import {InicioProductos} from "./InicioProductos"
import {NuevoProducto} from "./NuevoProducto"
import { EditarProducto } from "./EditarProducto";
import { BorrarProducto } from "./BorrarProducto";
//import { EditarProducto } from "./EditarProducto";
//import { BorrarUsuario } from "./Borrar";

export function Rutas() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />}></Route>

          {/* USUARIO */}
          <Route path="/" element={< Inicio />}></Route>
          <Route path="/Nuevo" element={<Nuevo />}></Route>
          <Route path="/EditarUsuario/:id" element={<EditarUsuario/>}></Route>
          <Route path="/BorrarUsuario/:id" element={<BorrarUsuario/>}></Route>

          {/* PRODUCTOS */}
          <Route path="/Productos" element={<InicioProductos />}></Route>
          <Route path="/NuevoProducto" element={<NuevoProducto/>}></Route>
          <Route path="/EditarProducto/:id" element={<EditarProducto/>}></Route>
          <Route path="/BorrarProducto/:id" element={<BorrarProducto/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}