class ProductManager {
    constructor() {
      this.products = [];
      this.idAuto = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        throw new Error(`El producto con esta id ${id} no fue encontrado`);
      }
      return product;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some((p) => p.code === code)) {
        throw new Error(`El producto con este code ${code} ya existe`);
      }
  
      const product = {
        id: ++this.idAuto,
        title,
        description,
        price,
        thumbnail,
        stock,
        code,
      };
  
      this.products.push(product);
      return product;
    }
  }
  

  const ProductManager1 = new ProductManager();
  

  
  
  const product1 = ProductManager1.addProduct(
      "Zapatilla",
      "Zapatilla roja Adidas",
      200,
      "Foto1",
      "abc123",
      25
      );
      
      const product2 = ProductManager1.addProduct(
          "Zapatilla",
          "Zapatilla verde Nike",
          200,
          "Foto2",
          "321bca",
          25
          );
          const product3 = ProductManager1.addProduct(
              "Zapatilla",
              "Zapatilla blanca Puma",
              200,
              "Foto3",
              "123acba",
              25
              );
              
              
              
              console.log(ProductManager1.getProducts()); 