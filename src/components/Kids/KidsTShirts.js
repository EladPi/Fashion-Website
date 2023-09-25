import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectKidsTShirts } from '../../store/reducers/kidsSlice';
import "../../styles/componentsStyle.css"


export const KidsTShirts = () => {
    const kidsItems = useSelector(selectKidsTShirts);

    return (
        <div className="container">
            <h2>Kids T-Shirts Collection</h2>
            <ItemList items={kidsItems} category='kids'/>
        </div>
    );
}

