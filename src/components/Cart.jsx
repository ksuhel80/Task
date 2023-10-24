import React from 'react'
import { selectItems, selectTotal } from '../app/slices/basketSlice';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
   

    return (
        <div className="bg-gray-100">

               <main className="lg:flex max-w-screen-2xl mx-auto ">

                    <div className="flex-grow m-5 shadow-sm">
                      
                        <div className="flex flex-col p-5 space-y-10 bg-white">
                            <h1 className="text-3xl border-b pb-4">{items.length === 0 ?  'Your Cart is Empty' : 'Shopping Basket'}</h1>
                            {items.map((item, i) => (
                                <CartItem key={i} id={item.id} title={item.name} rating={item.rating} price={item.price} description={item.description}  url={item.url} />
                            ))}
                        </div>

                    
                    </div>
                    <div className="flex flex-col bg-white p-10 shadow-md">
                            {items.length > 0 && (
                                <>
                                <h2 className="whitespace-nowrap">        
                                    Subtotal ({items.length} items): {" "}
                                    <span className="font-bold"> 
                                        {total} ₹
                                    </span>
                                </h2>
                            
                                </>
                            )}
                        </div>
               </main>
          
        </div>
    )
}

export default Cart