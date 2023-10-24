import { useEffect, useState } from "react";

import "./App.css";
import { api } from "./api/api";

import Product from "./components/product";

import { useSelector } from "react-redux";
import { selectItems } from "./app/slices/basketSlice";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);

  //getAll Products from API
  const getAllProducts = async () => {
    const data = await api
      .post("product/getAllProduct", {
        limit: 100,
        page: 0,
        search: "",
      })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return data;
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {console.log(data)}
        {data.length &&
          data.map((item) => (
            <Product
              key={item._id}
              id={item._id}
              name={item.name}
              url={item.imageUrl}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>
    </>
  );
}

export default App;
