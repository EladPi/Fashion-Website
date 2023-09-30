import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectBestSellersWomen, selectFilteredBestSellersItems, applyFilter , clearFilters, selectCurrentFilters } from '../../store/reducers/bestSellersSlice';
import FilterComponent from '../Filters/FilterComponent';import "../../styles/componentsStyle.css"
import "../../styles/componentsStyle.css"


export const BestSellersWomen = () => {
    const bestSellersItems = useSelector(selectBestSellersWomen);
    const bestSellersFilteredItems = useSelector((state) => selectFilteredBestSellersItems(state,bestSellersItems))
    const currentFilters = useSelector(selectCurrentFilters)

    return (
        <>
        <div className="men-all-container">
            <h2>Women's Best Sellers</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters}/>
            <ItemList items={bestSellersFilteredItems} category='bestsellers'/>
        </div>
        </>
    );
}

