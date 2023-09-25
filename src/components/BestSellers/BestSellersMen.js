import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectBestSellersMen } from '../../store/reducers/bestSellersSlice';
import "../../styles/componentsStyle.css"


export const BestSellersMen = () => {
    const bestSellersItems = useSelector(selectBestSellersMen);

    return (
        <>
        <div className="container">
            <h2>Men Best Sellers</h2>
            <ItemList items={bestSellersItems} category='bestsellers'/>
        </div>
        </>
    );
}

