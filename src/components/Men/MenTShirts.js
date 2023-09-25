import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenTShirts } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"


export const MenTShirts = () => {
    const menItems = useSelector(selectMenTShirts);

    return (
        <div className="men-all-container">
            <h2>Men T-Shirts Collection</h2>
            <ItemList items={menItems} category='men'/>
        </div>
    );
}

