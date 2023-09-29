import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectKidsAll ,selectFilteredKidsItems, applyFilter , clearFilters } from '../../store/reducers/kidsSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const KidsAll = () => {
    const kidsItems = useSelector(selectKidsAll);
    const kidsFilteredItems = useSelector((state)=> selectFilteredKidsItems(state , kidsItems));

    return (
        <div className="men-all-container">
            <h2>Kids Collection</h2>
            <FilterComponent callingComponent='all' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={kidsFilteredItems} category='kids'/>
        </div>
    );
}

