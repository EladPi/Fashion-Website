import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenAll ,selectFilteredWomenItems, applyFilter , clearFilters, selectCurrentFilters } from '../../store/reducers/womenSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const WomenAll = () => {
    const womenItems = useSelector(selectWomenAll);
    const womenFilteredItems = useSelector((state)=> selectFilteredWomenItems(state , womenItems));
    const currentFilters = useSelector(selectCurrentFilters)

    return (
        <div className="men-all-container">
            <h2>Women's Collection</h2>
            <FilterComponent callingComponent='all' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters}/>
            <ItemList items={womenFilteredItems} category='women'/>
        </div>
    );
}

