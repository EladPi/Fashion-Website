import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectNewArrivalsMen } from '../../store/reducers/newArrivalsSlice';
import "../../styles/componentsStyle.css"


export const NewArrivalsMen = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsMen);

    return (
        <div className="container">
            <h2>Men's New Arrivals</h2>
            <ItemList items={newArrivalsItems} category='newarrivals'/>
        </div>
    );
}

