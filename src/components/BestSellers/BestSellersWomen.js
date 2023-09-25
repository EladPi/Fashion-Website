import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectBestSellersWomen } from '../../store/reducers/bestSellersSlice';
import "../../styles/componentsStyle.css"


export const BestSellersWomen = () => {
    const bestSellersItems = useSelector(selectBestSellersWomen);

    return (
        <>
        <div className="container">
            <h2>Women's Best Sellers</h2>
            <ItemList items={bestSellersItems} category='bestsellers'/>
        </div>
        </>
    );
}

