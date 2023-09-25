import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectBestSellersKids } from '../../store/reducers/bestSellersSlice';
import "../../styles/componentsStyle.css"


export const BestSellersKids = () => {
    const bestSellersItems = useSelector(selectBestSellersKids);

    return (
        <>
        <div className="container">
            <h2>Kids Best Sellers</h2>
            <ItemList items={bestSellersItems} category='bestsellers'/>
        </div>
        </>
    );
}

