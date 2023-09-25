import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectNewArrivalsAll } from '../../store/reducers/newArrivalsSlice';
import "../../styles/componentsStyle.css"


export const NewArrivalsAll = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsAll);

    return (
        <div className="container">
            <h2>New Arrivals</h2>
            <ItemList items={newArrivalsItems} category='newarrivals'/>
        </div>
    );
}

