# Godoy Cruz Antonio Tomba · Sitio de práctica

Sitio web hecho como práctica de maquetación, inspirado en el Club Deportivo Godoy Cruz Antonio Tomba de Mendoza, el club del que soy hincha.

**Ver sitio:** https://facuvillafane10.github.io/Club-Godoy-Cruz/

> Proyecto personal de aprendizaje, **sin relación oficial con el club**. Los nombres, escudos e imágenes pertenecen a sus respectivos dueños.

## Páginas

- **Inicio**: presentación del club.
- **Jugadores**: plantel con filtro por posición.
- **Estadio**: historia del estadio Feliciano Gambarte.
- **Tienda**: catálogo de indumentaria con carrito de compras que se guarda en `localStorage`.
- **Contacto**: formulario y redes.

## Tecnologías

- HTML5 y CSS3, con estilos escritos en **Sass** y organizados en parciales (`sass/partials/`).
- **Bootstrap 5** para la grilla y los componentes.
- **JavaScript** sin frameworks para el filtro de jugadores y el carrito.
- Diseño adaptable con media queries.
- Publicado con GitHub Pages.

## Cómo correrlo

Es un sitio estático: alcanza con abrir `index.html` en el navegador.

Para modificar los estilos hay que compilar Sass:

```bash
npm install
npm run sass:watch   # compila sass/estilos.scss en css/estilos.css
```