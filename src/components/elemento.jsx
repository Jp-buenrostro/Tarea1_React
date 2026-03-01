import React from "react";

const Elemento = ({ text, likes, onLike, onDelete }) => {
    return (
        <div>
            <p>{text}</p>

            <button onClick={onLike}>
                Me gusta ({likes})
            </button>

            <button onClick={onDelete}>
                Eliminar
            </button>
        </div>
    );
};

export default React.memo(Elemento);