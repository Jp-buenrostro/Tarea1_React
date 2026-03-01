# Tarea 1 - Renderizado en React

## Team 22 
- Joaquin Hiroki Campos  – Parte teórica 
- Juan Pablo Buenrostro / Emilio Pardo  – Fase 2
- Fernanda Jimenez / Estabn Muñoz – Fase 3


# ¿Qué es el Virtual DOM?
El Virtual DOM es una representación ligera del DOM real que React mantiene en memoria, es un objeto JavaScript que describe cómo debería verse la interfaz.
Virtual DOM nos permite manipular el DOM real del navegador es lento y costoso. Cada vez que cambiamos algo (en este caso, agregar un elemento a la lista), el navegador tiene que recalcular estilos, posiciones y repintar la pantalla. Hacer esto por cada pequeño cambio, provocaria que la aplicación fuera lenta.

# ¿Cuándo ocurre un re-render?

