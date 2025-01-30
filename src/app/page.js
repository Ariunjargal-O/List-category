import Image from "next/image";
import styles from "./page.module.css";

const data = [
  {
    category: "Fruits",
    item: [
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
    item: [
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

function Item(props) {
  const items = [];
  for (i = 0; i < props.categoryItem.item.length; i++) {
    items.push();
  }
  return (
    <div className="product-list">
      {/* <p>{props.categoryItem.item[i].name}</p>
      <p>{props.item[i].price}</p> */}
      {items}
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
      <ProductCategory data = {data}></ProductCategory>
      <Item categoryItem={data[0]}></Item>
      <Item categoryItem={data[1]}></Item>
    </div>
  );
}
