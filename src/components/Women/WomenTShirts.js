import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenTShirts ,selectFilteredWomenItems, applyFilter , clearFilters } from '../../store/reducers/womenSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const WomenTShirts = () => {
    const womenItems = useSelector(selectWomenTShirts);
    const womenFilteredItems = useSelector((state)=> selectFilteredWomenItems(state , womenItems));

    return (
        <div className="men-all-container">
            <h2>Women T-Shirts Collection</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={womenFilteredItems} category='women'/>
        </div>
    );
}

