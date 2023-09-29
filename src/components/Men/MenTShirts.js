import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenTShirts ,selectFilteredMenItems, applyFilter , clearFilters } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"
import FilterComponent from '../Filters/FilterComponent';


export const MenTShirts = () => {
    const menItems = useSelector(selectMenTShirts);
    const menFilteredItems = useSelector((state)=> selectFilteredMenItems(state , menItems));

    return (
        <div className="men-all-container">
            <h2>Men T-Shirts Collection</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={menFilteredItems} category='men'/>
        </div>
    );
}

