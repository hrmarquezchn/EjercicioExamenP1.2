const API_URL = "https://fakestoreapi.com/products";

const obtenerProductos = async () => {
  const respuesta = await fetch(API_URL);
  const productos = await respuesta.json();
  return productos;
};

const mostrarProductos = (productos) => {
  const productosHTML = productos.map((producto) => {
    return `
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
          <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.description}</p>
            <p class="card-text">Precio: $${producto.price}</p>
            <p class="card-text">Categoría: ${producto.category}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  document.getElementById("productos").innerHTML = productosHTML;
};

obtenerProductos().then((productos) => {
  mostrarProductos(productos);
});