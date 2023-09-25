import '../../styles/itemList.css';
import { Link } from 'react-router-dom';

function BestSellersGrid() {
  const items = [
    { img: '/logo192.png', name: 'Item 1', price: '$20.00' },
    { img: '/logo192.png', name: 'Item 2', price: '$25.00' },
    { img: '/logo192.png', name: 'Item 3', price: '$25.00' },
    { img: '/logo192.png', name: 'Item 4', price: '$25.00' },
    { img: '/logo192.png', name: 'Item 5', price: '$25.00' },
    { img: '/logo192.png', name: 'Item 6', price: '$25.00' },
    { img: '/logo192.png', name: 'Item 7', price: '$25.00' },
    { img: '/logo192.png', name: 'Item 8', price: '$25.00' },
    // ... add more items
];


return (
  <>
    <span>Best Sellers</span>
    <div className="grid-container">
      {items.map((item, index) => (
          <div className="grid-item" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <Link to="bestsellers/item-route" className="shop-link">Shop Now</Link>
          </div>
      ))}
  </div>
    <Link to="/bestsellers/men" className="shop-link link">View More</Link>
  </>
);
}

export default BestSellersGrid;
