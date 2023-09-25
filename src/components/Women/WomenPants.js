import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectWomenPants } from '../../store/reducers/womenSlice';
import "../../styles/componentsStyle.css"


export const WomenPants = () => {
    const womenItems = useSelector(selectWomenPants);

    return (
        <div className="container">
            <h2>Women Pants Collection</h2>
            <ItemList items={womenItems} category='women'/>
        </div>
    );
}

