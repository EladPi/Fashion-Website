import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenAll } from '../../store/reducers/womenSlice';
import "../../styles/componentsStyle.css"


export const WomenAll = () => {
    const womenItems = useSelector(selectWomenAll);

    return (
        <div className="men-all-container">
            <h2>Women's Collection</h2>
            <ItemList items={womenItems} category='women'/>
        </div>
    );
}

