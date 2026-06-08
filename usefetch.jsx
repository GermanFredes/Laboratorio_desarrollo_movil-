import { useEffect, useState } from "react";

export function UseFetch() {
  const [datos, setDatos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filtrados, setFiltrados] = useState([]);

  const maximo = 20;

  useEffect(() => {
    async function obtener() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1500"
        );
        const res = await response.json();
        setDatos(res.results);
      }
      catch (error){
        console.log(error);
      } 
      finally {
        setLoading(false);
      }
    }

    obtener();
  }, []);

  const inicio = (pagina - 1) * maximo;
  const fin = inicio + maximo;

  const listaBase =
    filtrados.length > 0 ? filtrados : datos;

  const slicedData = listaBase.slice(inicio, fin);

  function filtrar(nombre) {
    if (!nombre) {
      setFiltrados([]);
      return;
    }

    const resultado = datos.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(nombre.toLowerCase())
    );

    setFiltrados(resultado);
  }

  return {
    slicedData,
    pagina,
    setPagina,
    loading,
    filtrados,
    filtrar
  };
}