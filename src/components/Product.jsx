import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../app/slices/basketSlice";

const Product = ({ name, url, description, price, rating, id }) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      name,
      price,
      description,
     
      url,
      rating,
   
    };

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <img src={url} className="w-52 h-52 object-contain self-center" />
      <h4 className="my-3 line-clamp-3 ">{name}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500 " />
          ))}
        {/* {Array(5-rating).fill().map((_, i) => (
                    <StarIcon className="h-5 text-gray-500 " />
                ))} */}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">{price} ₹</div>
      <div className="flex items-center space-x-2 -mt-5">
        <p className="text-xs text-gray-500"> Free Next-day Delivery</p>
      </div>
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket{" "}
      </button>
    </div>
  );
};

export default Product;
