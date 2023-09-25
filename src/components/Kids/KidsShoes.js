import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectKidsShoes } from '../../store/reducers/kidsSlice';
import "../../styles/componentsStyle.css"


export const KidsShoes = () => {
    const kidsItems = useSelector(selectKidsShoes);

    return (
        <div className="container">
            <h2>Kids Shoes Collection</h2>
            <ItemList items={kidsItems} category='kids'/>
        </div>
    );
}

