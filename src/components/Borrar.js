import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {URL_API} from "../config/rutas"

export function BorrarUsuario(){
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res = await axios.get(URL_API+"borrarUsuario/"+params.id)
            navigate("/");
        }
        borrar();
    },[params.id]);
    return(
        <h1>Usuario eliminado</h1>
    );
}