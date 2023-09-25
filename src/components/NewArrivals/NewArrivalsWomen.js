import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectNewArrivalsWomen } from '../../store/reducers/newArrivalsSlice';
import "../../styles/componentsStyle.css"


export const NewArrivalsWomen = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsWomen);

    return (
        <div className="container">
            <h2>Women's New Arrivals</h2>
            <ItemList items={newArrivalsItems} category='newarrivals'/>
        </div>
    );
}

