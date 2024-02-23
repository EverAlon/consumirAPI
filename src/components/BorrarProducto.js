import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {URL_API_PRODUC} from "../config/rutas"

export function BorrarProducto(){
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res = await axios.get(URL_API_PRODUC+"borrarProducto/"+params.id)
            navigate("/productos");
        }
        borrar();
    },[params.id]);
    return(
        <h1>Producto eliminado</h1>
    );
}