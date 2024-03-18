import { CartItem } from "../App";
import { sampleFurniture } from "../data/sampleFurniture";

type ItemListProps = {
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function ItemList({ setCart }: ItemListProps) {

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => [...prevCart, item])
    }

    return (
        <div id='items' className="flex flex-col py-4">
            <h2 className="text-center text-4xl font-bold text-primary mt-8 mb-4">Our Items</h2>
            <div className="flex flex-col lg:flex-row gap-4 flex-wrap mx-auto w-full justify-center items-stretch">
                {sampleFurniture.map(furniture => (
                    <div data-aos="fade-in" data-aos-delay="50" data-aos-duration="1000" className="card w-96 lg:min-w-96 bg-base-100 shadow-xl" key={furniture.name}>
                        <figure className="bg-white"><img src={furniture.picture} alt={furniture.name} className="h-48 object-contain" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{furniture.name.slice(0, 50)}</h2>
                            <p>{furniture.description.slice(0, 50)}</p>
                            <div className="card-actions justify-between items-center">
                                <p className="text-2xl font-bold">${furniture.price}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(furniture)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
