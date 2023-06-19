class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0;

    addProduct(title, description, price, image, code, stock) {
        for(let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`El codigo ${code} esta utilizado`);
            }
        }
        ProductManager.id++;
        this.products.push({title, description, price, image, code, stock, id:ProductManager.id})
        if (!title || !description || !price || !image || !code || !stock) { return console.log("No se completaron todos los campos") }
    }
    

    getProduct() {
        return this.products;
    }

    existeProducto(id) {
        return this.products.find((prod) => prod.id === id)
    }

    getProductById(id) {
        !this.existeProducto(id) ? console.log("No existe el producto") : console.log(this.existeProducto(id))
    }
}

const productos = new ProductManager();

productos.addProduct("Valorant","Juego de disparos", 300, "imagenvalorant","666",3);
productos.addProduct("CSGO","Juego de disparos", 200, "imagencsgo","333",2);
productos.addProduct("League of legends","Juego de mrd", 200, "imagenlol","333",);

console.log(productos.getProduct());

productos.getProductById(2);
productos.getProductById(4)