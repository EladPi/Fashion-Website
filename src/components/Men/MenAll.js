import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenAll ,selectFilteredMenItems, applyFilter , clearFilters } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"
import FilterComponent from '../Filters/FilterComponent';


export const MenAll = () => {
    const menItems = useSelector(selectMenAll);
    const menFilteredItems = useSelector((state)=> selectFilteredMenItems(state , menItems));


    return (
        <div className="men-all-container">
            <h2>Men's Collection</h2>
            <FilterComponent callingComponent='all' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={menFilteredItems} category='men'/>
        </div>
    );
}

