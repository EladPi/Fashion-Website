import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectNewArrivalsWomen ,selectFilteredNewArrivalsItems, applyFilter , clearFilters } from '../../store/reducers/newArrivalsSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const NewArrivalsWomen = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsWomen);
    const newArrivalsFilteredItems = useSelector((state)=> selectFilteredNewArrivalsItems(state , newArrivalsItems));

    return (
        <div className="men-all-container">
            <h2>Women's New Arrivals</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={newArrivalsFilteredItems} category='newarrivals'/>
        </div>
    );
}

