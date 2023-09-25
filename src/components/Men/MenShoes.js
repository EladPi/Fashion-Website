import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenShoes } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"


export const MenShoes = () => {
    const menItems = useSelector(selectMenShoes);

    return (
        <div className="men-all-container">
            <h2>Men Shoes Collection</h2>
            <ItemList items={menItems} category='men'/>
        </div>
    );
}

