import { useState } from "react";
import "./App.css";

function ListProduct() {
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
  return (
<>
    <div className="container">
      <div className="product-container">
    {products.map((x,category) => 
    <div key={category} className="content">
      <img src={x.image} alt="" />
      <p>{ x.name }</p>
      <p>{x.category }</p>
      <p>${x.price }</p>

    </div>
    )}
    </div>
    </div>
  
  </>
  );
   
}

function App() {
  return (
    <>
<ListProduct/>

    </>
  )

}

export default App;
