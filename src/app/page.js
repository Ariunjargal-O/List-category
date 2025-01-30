import Image from "next/image";
import styles from "./page.module.css";

const data = [
  {
    category: "Fruits",
    items: [
      {
        price: "$1",
        stocked: true,
        name: "Apple",
      },
      { price: "$1", stocked: true, name: "Dragonfruit" },
      {
        price: "$2",
        stocked: false,
        name: "Passionfruit",
      },
    ],
  },
  {
    category: "Vegetables",
    items: [
      {
        price: "$2",
        stocked: true,
        name: "Spinach",
      },
      { price: "$4", stocked: false, name: "Pumpkin" },
      {
        price: "$1",
        stocked: true,
        name: "Peas",
      },
    ],
  },
];

// const data = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];

function SearchBar(props) {
  return (
    <div>
      <input type="text" placeholder="Search..."></input>
      <div className="input">
        <input type="checkbox"></input>
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

function ProductTable(props) {
  return (
    <div className="name-list">
      <h1>NAME</h1>
      <h1>PRICE</h1>
    </div>
  );
}

function ProductCategory(props) {
  return <h2>{props.data.category}</h2>;
}

function ProductItem(props) {
  return (
    <div className="product-list">
      <p className="product">{props.productItem.name}</p>
      <p>{props.productItem.price}</p>
    </div>
  );
}
function CategoryItem(props) {
  const item = [];
  console.log(props);
  for (let i = 0; i < props.categoryProductItem.items.length; i++) {
    item.push(
      <ProductItem
        productItem={props.categoryProductItem.items[i]}
      ></ProductItem>
    );
  }
  return (
    <div  className="product">
      {item}
      </div>
  );
}

export default function Home() {


  return (
    <div className="container">
      <div className="search">
      <SearchBar></SearchBar>
      </div>
     
      <ProductTable></ProductTable>
      <ProductCategory data={data[0]}></ProductCategory>
      <CategoryItem categoryProductItem={data[0]}></CategoryItem>
      <ProductCategory data={data[1]}></ProductCategory>
      <CategoryItem categoryProductItem={data[1]}></CategoryItem>
    </div>
  );
}
