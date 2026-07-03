
// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>

//       {products.map((item) => (
//         <div key={item.id}>
          
//           <img src={item.image} alt={item.title} width="100" />
//           <h3>{item.title}</h3>
//           <p>₹ {item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>

//       {products.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "15px",
//             margin: "15px",
//             width: "250px",
//           }}
//         >
//           <img
//             src={item.image}
//             alt={item.title}
//             width="120"
//             height="120"
//           />

//           <h3>{item.title}</h3>

//           <p>
//             <strong>Price:</strong> ₹ {item.price}
//           </p>

//           <p>
//             <strong>Category:</strong> {item.category}
//           </p>

//           <button>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
              }}
            />

            <h3 style={{ fontSize: "16px" }}>{item.title}</h3>

            <p>
              <strong>₹ {item.price}</strong>
            </p>

            <p>{item.category}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;