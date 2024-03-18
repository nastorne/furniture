import { useEffect, useState } from "react"
import { CartItem } from "../App"
import { MdDeleteForever } from "react-icons/md";

type CartProps = {
    cart: CartItem[]
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;

}

export default function Cart({ cart, setCart }: CartProps) {
    const [cartPrice, setCartPrice] = useState(0)
    useEffect(() => {
        setCartPrice(0)

        cart.forEach((item) => {
            setCartPrice(prevPrice => prevPrice + item.price)
        })
    }, [cart])

    const removeFromCart = (itemToRemove: CartItem) => {
        const updatedCart = cart.filter(item => item !== itemToRemove);
        setCart(updatedCart);
    };

    if (!cart) return <></>
    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Cart</h3>
                    {!cart.length && <p>No items in cart.</p>}
                    <div className="flex flex-col gap-2">
                        {cart.map((item) => (
                            <div key={item.name + Math.random()} className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img src={item.picture} className="w-16 rounded-lg bg-white border-primary border aspect-square object-contain" />
                                    <p>{item.name.slice(0, 20)}...</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p>${item.price}</p>
                                    <MdDeleteForever onClick={() => removeFromCart(item)} className="text-xl text-primary cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-end">Total: <span className="text-2xl font-bold">${cartPrice}</span></p>
                    <div className="flex w-full">
                        <button className="btn btn-primary ml-auto mt-4">Checkout</button>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_6">Close</label>
            </div></>
    )
}
