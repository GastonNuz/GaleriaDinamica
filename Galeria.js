const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const contenedorPrincipal = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

/* Abre el Contenedor Principal */
const abrirContenedorPrincipal = (event) => {
  imagenActiva.src = event.target.src;
  contenedorPrincipal.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abrirContenedorPrincipal);
});

/* Cierra el contenedorPrincipal.style.display = 'none';
 */
btnCierra.addEventListener('click', () => {
  contenedorPrincipal.style.display = 'none';
});

/* Adelanta la imagen */
const adelantaImagen = () => {
  indiceImagen = (indiceImagen + 1) % imagenes.length; // Evita índice fuera de rango
  imagenActiva.src = imagenes[indiceImagen].src;
};

btnAdelanta.addEventListener('click', adelantaImagen);

/* Retrocede la imagen */
const retrocederImagen = () => {
  indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length; // Evita índice negativo
  imagenActiva.src = imagenes[indiceImagen].src;
};

btnRetrocede.addEventListener('click', retrocederImagen);
