// import React from "react";
// import "./App.css";

// const App = () => {
//   const images = [
//     "./public/ReactImages/Blog_1.jpg",
//     "./public/ReactImages/Blog_2.jpg",
//   ];

//   const imageElements = [];

//   images.forEach((image, index) => {
//     imageElements.push(
//       <img src={image} alt="user images" width={"100px"} height={"200px"} />
//     );
//   });
//   return (
//     <>
//       <h1>given images</h1>
//       <div
//         className="user_image"
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//         }}
//       >
//         <h1>{imageElements}</h1>
//         <p>Images</p>
//       </div>
//     </>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   const images = [
//     "./public/ReactImages/Blog_1.jpg",
//     "./public/ReactImages/Blog_2.jpg",
//   ];
//   return (
//     <>
//       <h1>welcome!</h1>
//       <div>
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={`${image}`}
//             alt={`img-${index}`}
//             style={{ width: "200px", margin: "10px" }}
//           />
//         ))}
//         <p>welcome</p>
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";

const App = () => {
  const productData = [
    {
      id: 1,
      name: "user images_1",
      image: "./public/ReactImages/Blog_1.jpg",
      price: "$10",
    },
    {
      id: 2,
      name: "user images_1",
      image: "./public/ReactImages/Blog_2.jpg",
      price: "$10",
    },
    {
      id: 3,
      name: "user images_1",
      image: "./public/ReactImages/Blog_3.jpg",
      price: "$10",
    },
    {
      id: 4,
      name: "user images_1",
      image: "./public/ReactImages/Blog_4.jpg",
      price: "$10",
    },
    {
      id: 5,
      name: "user images_1",
      image: "./public/ReactImages/Blog_5.jpg",
      price: "$10",
    },
    {
      id: 6,
      name: "user images_1",
      image: "./public/ReactImages/Blog_6.jpg",
      price: "$10",
    },
    {
      id: 7,
      name: "user images_1",
      image: "./public/ReactImages/Blog_7.jpg",
      price: "$10",
    },
    {
      id: 8,
      name: "user images_1",
      image: "./public/ReactImages/Blog_8.jpg",
      price: "$10",
    },
    {
      id: 9,
      name: "user images_1",
      image: "./public/ReactImages/Blog_9.jpg",
      price: "$10",
    },
  ];
  return (
    <div>
      <h1>welcome</h1>
      {productData.map((product) => (
        <div
          key={product.id}
          style={{
            margin: "10px",
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "150px", height: "150px" }}
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default App;
