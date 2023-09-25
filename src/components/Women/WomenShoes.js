import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenShoes } from '../../store/reducers/womenSlice';
import "../../styles/componentsStyle.css"


export const WomenShoes = () => {
    const womenItems = useSelector(selectWomenShoes);

    return (
        <div className="container">
            <h2>Women Shoes Collection</h2>
            <ItemList items={womenItems} category='women'/>
        </div>
    );
}

