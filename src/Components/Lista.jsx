import React, { useState } from 'react';
import "./App.css";

export default function ListaDeTareas() {
    const [lista, setLista] = useState([]);
    const [entrada, setEntrada] = useState("");

    const agregarTarea = () => {
        if (entrada.trim() === "") return;
        setLista([...lista, { 
            id: Date.now(), 
            texto: entrada, 
            completada: false 
        }]);
        setEntrada("");
    };

    const alternarTarea = (id) => {
        setLista(lista.map(tarea => 
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        ));
    };

    const eliminarTarea = (id) => {
        setLista(lista.filter(tarea => tarea.id !== id));
    };

    return (
        <main className="contenedor">
            <h2 className="titulo">Mis Tareas</h2>
            
            <div className="controles">
                <input 
                    className="input-tarea"
                    type="text" 
                    value={entrada} 
                    onChange={(e) => setEntrada(e.target.value)} 
                    placeholder="Escribe una tarea..."
                />
                <button className="btn-accion btn-agregar" onClick={agregarTarea}>
                    Agregar
                </button>
                <button className="btn-accion btn-borrar-todo" onClick={() => setLista([])}>
                    Borrar Todo
                </button>
            </div>

            <ul className="lista-tareas">
                {lista.map((tarea) => (
                    <li key={tarea.id} className="tarea-item">
                        <span className={`texto-tarea ${tarea.completada ? 'completada' : ''}`}>
                            {tarea.texto}
                        </span>
                        <div className="grupo-botones">
                            <button className="btn-circular btn-v" onClick={() => alternarTarea(tarea.id)}>
                                ✓
                            </button>
                            <button className="btn-circular btn-e" onClick={() => eliminarTarea(tarea.id)}>
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
