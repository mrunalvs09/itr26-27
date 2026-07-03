







// import { Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Products from "./pages/Products";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="products" element={<Products />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
// // import { useEffect, useState } from "react";
// // import "./App.css";
// // import ProductList from "./components/ProductList";

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [search, setSearch] = useState("");

// //   useEffect(() => {
// //     fetch("https://fakestoreapi.com/products")
// //       .then((res) => res.json())
// //       .then((data) => setProducts(data));
// //   }, []);

// //   const filteredProducts = products.filter((product) =>
// //     product.title.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="app">
// //       <h1>🛍️ Fake Store</h1>

// //       <input
// //         type="text"
// //         placeholder="Search products..."
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //         className="search"
// //       />

// //       <ProductList products={filteredProducts} />
// //     </div>
// //   );
// // }

// // export default App;


// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// function App() {
//   return (
//     <BrowserRouter>
//       <nav
//         style={{
//           display: "flex",
//           gap: "20px",
//           padding: "15px",
//           background: "#f5f5f5",
//         }}
//       >
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;