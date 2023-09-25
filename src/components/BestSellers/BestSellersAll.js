import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectBestSellersAll } from '../../store/reducers/bestSellersSlice';
import "../../styles/componentsStyle.css"


export const BestSellersAll = () => {
    const bestSellersItems = useSelector(selectBestSellersAll);

    return (
        <div className="container">
            <h2>Best Sellers</h2>
            <ItemList items={bestSellersItems} category='bestsellers'/>
        </div>
    );
}

