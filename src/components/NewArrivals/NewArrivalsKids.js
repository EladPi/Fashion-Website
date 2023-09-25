import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectNewArrivalsKids } from '../../store/reducers/newArrivalsSlice';
import "../../styles/componentsStyle.css"


export const NewArrivalsKids = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsKids);

    return (
        <div className="container">
            <h2>Kids New Arrivals</h2>
            <ItemList items={newArrivalsItems} category='newarrivals'/>
        </div>
    );
}

