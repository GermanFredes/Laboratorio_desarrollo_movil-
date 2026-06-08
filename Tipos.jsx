import { useEffect, useState } from "react";
import { traducir } from "../function/Traduccion"

export function Tipos({ url }) {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    async function obtenerTipos() {

      try {
        const response =
        await fetch(url);

        const data =
        await response.json();

        setTipos(
          data.types.map(
            tipo => tipo.type.name
          )
        );
      }
      catch(error){
        console.log(error);
      }
    }
    obtenerTipos();
  }, [url]);

  return (
    <div>
      {
        tipos.map(tipo => (
          <span
          key={tipo}
          className="tipo"
          >
            {traducir(tipo)}
          </span>
        ))
      }
    </div>
  );
}