import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../app/slices/basketSlice";

//Cartitems

function CartItem({ id, name, price, description, url, rating }) {
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

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <img src={url} className="w-52 h-52 object-contain self-center" />

      <div className="col-span-3 mx-5">
        <p>{name}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500 " />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        {price} ₹
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket{" "}
        </button>
      </div>
    </div>
  );
}

export default CartItem;
