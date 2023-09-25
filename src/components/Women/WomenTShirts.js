import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenTShirts } from '../../store/reducers/womenSlice';
import "../../styles/componentsStyle.css"


export const WomenTShirts = () => {
    const womenItems = useSelector(selectWomenTShirts);

    return (
        <div className="container">
            <h2>Women T-Shirts Collection</h2>
            <ItemList items={womenItems} category='women'/>
        </div>
    );
}

