import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenAll } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"


export const MenAll = () => {
    const menItems = useSelector(selectMenAll);

    return (
        <div className="men-all-container">
            <h2>Men's Collection</h2>
            <ItemList items={menItems} category='men'/>
        </div>
    );
}

