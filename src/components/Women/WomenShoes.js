import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenShoes ,selectFilteredWomenItems, applyFilter , clearFilters } from '../../store/reducers/womenSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const WomenShoes = () => {
    const womenItems = useSelector(selectWomenShoes);
    const womenFilteredItems = useSelector((state)=> selectFilteredWomenItems(state , womenItems));

    return (
        <div className="men-all-container">
            <h2>Women Shoes Collection</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={womenFilteredItems} category='women'/>
        </div>
    );
}

