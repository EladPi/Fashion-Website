import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import "../../styles/componentsStyle.css"
import { selectNewArrivalsKids ,selectFilteredNewArrivalsItems, applyFilter , clearFilters } from '../../store/reducers/newArrivalsSlice';
import FilterComponent from '../Filters/FilterComponent';


export const NewArrivalsKids = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsKids);
    const newArrivalsFilteredItems = useSelector((state)=> selectFilteredNewArrivalsItems(state , newArrivalsItems));

    return (
        <div className="men-all-container">
            <h2>Kids New Arrivals</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={newArrivalsFilteredItems} category='newarrivals'/>
        </div>
    );
}

