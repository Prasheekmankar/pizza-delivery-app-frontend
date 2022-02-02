// import { Card, CardContent } from "@mui/material";
// import Button from "@mui/material/Button";
// import { useState } from "react";

// export function Pizza({ pizza }) {
//   const [varient, setVarient] = useState("small");
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <Card className="movie-container">
//       <img className="pizza-poster" src={pizza.img} alt={pizza.name} />
//       <CardContent>
//         <div className="pizza">
//           <div className="pizza-details">
//             <h5>{pizza.name}</h5>

//             <select
//               value={varient}
//               onChange={(e) => setVarient(e.target.value)}
//             >
//               {pizza.varients.map((varient) => (
//                 <option key={varient}>{varient}</option>
//               ))}
//             </select>
//             <select
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//             >
//               {[...Array(10).keys()].map((v, i) => (
//                 <option key={i} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <Button
//               variant="outlined"
//               color="inherit"
//               // onClick={() => setCart( arr => [...arr, `${arr.length}`])}
//             >
//               Add to Cart
//             </Button>
//             <h6>Price: {pizza.prices[0][varient] * quantity}</h6>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

//////

import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";

import { useDispatchCart } from "../context/Context";

const Bike = ({ pizza: bike }) => {
  // const [varient, setVarient] = useState("small");

  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    console.log(item)
    dispatch({ type: "ADD", item });
  };
  const [disable, setDisable] = useState(false);

  return (
    <Card className="bikes-container">
      <img  className="bike-poster" src={bike.poster} alt={bike.name} />
      <CardContent>
        <div className="bike-details">
          <h1>{bike.name}</h1>
        </div>
        <Button
          disabled={disable}
          onClick={() => {
            addToCart(bike);
            setDisable(!disable);
          }}
        >
          {disable === true ? "Added" : "Add to cart"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Bike;




// prasheek bike content


// import React, { useState } from "react";
// import { Card, CardContent } from "@mui/material";
// import Button from "@mui/material/Button";

// import { useDispatchCart } from "../context/Context";

// const bike = ({ bike }) => {
//   // const [varient, setVarient] = useState("small");

//   const dispatch = useDispatchCart();

//   const addToCart = (item) => {
//     console.log(item)
//     dispatch({ type: "ADD", item });
//   };
//   const [disable, setDisable] = useState(false);

//   return (
//     <Card className="pizzas-container">
//       <img  className="pizza-poster" src={bike.poster} alt={bike.name} />
//       <CardContent>
//         <div className="pizza-details">
//           <h1>{bike.name}</h1>
//         </div>
//         <Button
//           disabled={disable}
//           onClick={() => {
//             addToCart(bike);
//             setDisable(!disable);
//           }}
//         >
//           {disable === true ? "Added" : "Add to cart"}
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default Pizza;
