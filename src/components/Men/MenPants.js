import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenPants } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"


export const MenPants = () => {
    const menItems = useSelector(selectMenPants);

    return (
        <div className="men-all-container">
            <h2>Men Pants Collection</h2>
            <ItemList items={menItems} category='men'/>
        </div>
    );
}

