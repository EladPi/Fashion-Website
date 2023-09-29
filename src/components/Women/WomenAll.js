import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenAll ,selectFilteredWomenItems, applyFilter , clearFilters } from '../../store/reducers/womenSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const WomenAll = () => {
    const womenItems = useSelector(selectWomenAll);
    const womenFilteredItems = useSelector((state)=> selectFilteredWomenItems(state , womenItems));

    return (
        <div className="men-all-container">
            <h2>Women's Collection</h2>
            <FilterComponent callingComponent='all' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={womenFilteredItems} category='women'/>
        </div>
    );
}

