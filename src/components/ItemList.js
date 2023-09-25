import { Link } from "react-router-dom";
import { slugify } from "../utilities/slugify";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/reducers/cartSlice";
import '../styles/itemList.css';

export function ItemList({ items, category }) {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItemToCart(item));
    }

    return (
        <>
            <div className="grid-container">
                {items.map((item) => (
                    <div className="grid-item" key={item.id}>
                        <img 
                        src={item.imgSrc} 
                        alt={item.name} 
                        onError={(e) => { e.target.onerror = null; e.target.src="logo192.jpg" }}
                        />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}$</p>
                        <div className="buttons-container">
                            <Link
                                to={`/${category}/${item.id}/${slugify(item.name)}`}
                                className="shop-link"
                            >
                                View
                            </Link>
                            <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
