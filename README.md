# Tarea 1 - Renderizado en React

## Team 22 
- Joaquin Hiroki Campos  – Parte teórica 
- Juan Pablo Buenrostro / Emilio Pardo  – Fase 1 (React memo)
- Fernanda Jimenez / Estabn Muñoz – Fase 2


# ¿Qué es el Virtual DOM?
El Virtual DOM es una representación ligera del DOM real que React mantiene en memoria, es un objeto JavaScript que describe cómo debería verse la interfaz.
Virtual DOM nos permite manipular el DOM real del navegador es lento y costoso. Cada vez que cambiamos algo (en este caso, agregar un elemento a la lista), el navegador tiene que recalcular estilos, posiciones y repintar la pantalla. Hacer esto por cada pequeño cambio, provocaria que la aplicación fuera lenta.

# Contador con React.memo ()
En la fase 1, creamos un componente padre con useState y 3 componentes hijos que recibían las propiedades del componente padre. Pero cada vez que el estado del componente padre cambiaba (el contador) , react volvía a renderizar absolutamente todos los componentes aunque sus propiedades no hubieran sido modificadas. Para hacer mas eficiente esto, utilizamos	 “React.memo() ” en los componentes hijos, lo que evito que los componentes que no cambian fuera re-renderizados.

