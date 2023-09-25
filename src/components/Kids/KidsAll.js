import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectKidsAll } from '../../store/reducers/kidsSlice';
import "../../styles/componentsStyle.css"


export const KidsAll = () => {
    const kidsItems = useSelector(selectKidsAll);

    return (
        <div className="container">
            <h2>Kids Collection</h2>
            <ItemList items={kidsItems} category='kids'/>
        </div>
    );
}

