
// function Home() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Home Page</h1>

//       <Link to="/Products">
//         <button>Go to Products</button>
//       </Link>
//     </div>
//   );
// }

// export default Home;
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/products">
        <button>Go to Products</button>
      </Link>
    </div>
  );
}

export default Home;