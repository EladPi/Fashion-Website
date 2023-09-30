import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectBestSellersMen, selectFilteredBestSellersItems, applyFilter , clearFilters , selectCurrentFilters } from '../../store/reducers/bestSellersSlice';
import FilterComponent from '../Filters/FilterComponent';import "../../styles/componentsStyle.css"


export const BestSellersMen = () => {
    const bestSellersItems = useSelector(selectBestSellersMen);
    const bestSellersFilteredItems = useSelector((state) => selectFilteredBestSellersItems(state,bestSellersItems))
    const currentFilters = useSelector(selectCurrentFilters)


    return (
        <>
        <div className="men-all-container">
            <h2>Men Best Sellers</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters}/>
            <ItemList items={bestSellersFilteredItems} category='bestsellers'/>
        </div>
        </>
    );
}

