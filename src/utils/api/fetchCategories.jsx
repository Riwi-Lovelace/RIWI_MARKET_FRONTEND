// Funcion para recibir la api de productos/categorias
export const fetchCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data;
};

// Funcion para recibir la api de productos
export const fetchProducts = async () => {
    
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
};

