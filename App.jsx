import "./App.css";
import { UseFetch } from "./function/UseFetch";
import { Pokemon } from "./components/Pokemon"
import { useState } from "react";

function App(){

 const{slicedData, pagina, setPagina, loading, filtrar} = UseFetch();
   const [input, setInput] = useState("")
 
 if (loading) {
 return <h1>Cargando...</h1>
}

 return(

  <div>

   <h1>Pokemon API</h1>
   
   <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
   
   <button onClick={() => filtrar(input)}>filtrar</button>
   
  <div className="grid">
        {slicedData.map((poke) => (
          <Pokemon pokemon={poke} key={poke.name}/>
        ))}
      </div>

   <button onClick={()=>setPagina(pagina-1)}  disabled={pagina===1}>
    Anterior
   </button>
   <span>
    Página {pagina}
   </span>

   <button onClick={()=>setPagina(pagina+1)}
   >
    Siguiente
   </button>
  </div>

 )

}

export default App;