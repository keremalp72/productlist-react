import { useState } from "react";
import "./App.css";

function ListProduct() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  console.log(selectedProducts);

  const products = [
    {
      image: "/images/waffle-mb.png",
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    },
    {
      image: "/images/vanilla-mb.png",
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.0,
    },
    {
      image: "/images/macaron-mb.png",
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.0,
    },
    {
      image: "/images/tiramisu-mb.png",
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5,
    },
    {
      image: "/images/baklava-mb.png",
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.0,
    },
    {
      image: "/images/lemon-mb.png",
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.0,
    },
    {
      image: "/images/cake-mb.png",
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.5,
    },
    {
      image: "/images/brownie-mb.png",
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.5,
    },
    {
      image: "/images/cotta-mb.png",
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5,
    },
  ];

  const handleAddToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <>
      <div className="container">
        <div className="product-container">
          {products.map((product, index) => (
            <div key={index} className="content">
              <img src={product.image} alt="" />
              <button className="btns" onClick={() => handleAddToCart(product)}>
              <i class="fa-solid fa-cart-shopping"></i>Add To Cart
              </button>
              <p>{product.name}</p>
              <h2>{product.category}</h2>
              <h5>${product.price}</h5>
            </div>
          ))}
        </div>

        {selectedProducts.length > 0 && (
          <div className="selected-products">
            <h2>Selected Products</h2>
            {selectedProducts.map((product, index) => (
              <div key={index} className="selected-product">
                <p>Name: {product.name}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <ListProduct />
    </>
  );
}

export default App;
