import React, { useState } from "react";
import Elemento from "./elemento";

const Lista = () => {
    console.log("lista se monto ");
    const [items, setItems] = useState([
        { id: 1, text: "Coqui United 🤜🤛", likes: 0 },
        { id: 2, text: "Evil Coqui 😈", likes: 0 },
        { id: 3, text: "Coqui og ", likes: 0 },
    ]);

    const [text, setText] = useState("");
    console.log("Lista props:", items, text);

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
        console.log("Like:", id);

        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, likes: item.likes + 1 };
                }
                return item;
            })
        );
    };

    return (
        <div className="row">
            <h2>Coqui Versions</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nuevo grupo?"
            />
            <button onClick={agregar}>Agregar</button>

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

            <button onClick={revertir}>Revertir orden</button>
        </div>
    );
};

export default Lista;