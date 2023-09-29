import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectKidsPants ,selectFilteredKidsItems, applyFilter , clearFilters } from '../../store/reducers/kidsSlice';
import FilterComponent from '../Filters/FilterComponent';import "../../styles/componentsStyle.css"


export const KidsPants = () => {
    const kidsItems = useSelector(selectKidsPants);
    const kidsFilteredItems = useSelector((state)=> selectFilteredKidsItems(state , kidsItems));

    return (
        <div className="men-all-container">
            <h2>Kids Pants Collection</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={kidsFilteredItems} category='kids'/>
        </div>
    );
}

