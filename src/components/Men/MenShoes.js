import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenShoes ,selectFilteredMenItems, applyFilter , clearFilters } from '../../store/reducers/menSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const MenShoes = () => {
    const menItems = useSelector(selectMenShoes);
    const menFilteredItems = useSelector((state)=> selectFilteredMenItems(state , menItems));

    return (
        <div className="men-all-container">
            <h2>Men Shoes Collection</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters}/>
            <ItemList items={menFilteredItems} category='men'/>
        </div>
    );
}

