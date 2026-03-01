import React, { useState } from "react";
import Elemento from "./elemento";

const ListaDinamica = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Elemento 1", likes: 0 },
        { id: 2, text: "Elemento 2", likes: 0 },
        { id: 3, text: "Elemento 3", likes: 0 },
    ]);

    const [text, setText] = useState("");

    const agregar = () => {
        if (text.trim() === "") return;

        setItems([
            ...items,
            {
                id: Date.now(),
                text: text,
                likes: 0,
            },
        ]);

        setText("");
    };

    const eliminar = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const revertir = () => {
        setItems([...items].reverse());
    };

    const like = (id) => {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    return { ...item, likes: item.likes + 1 };
                }
                return item;
            })
        );
    };

    return (
        <div className="row">
            <h2>Lista dinámica</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nuevo elemento..."
            />

            <button onClick={agregar}>Agregar</button>
            <button onClick={revertir}>Revertir orden</button>

            {items.map((item, index) => {
                return (
                    <Elemento
                        key={item.id}
                        text={item.text}
                        likes={item.likes}
                        onLike={() => like(item.id)}
                        onDelete={() => eliminar(item.id)}
                    />
                );
            })}
        </div>
    );
};

export default ListaDinamica;