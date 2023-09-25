import React from 'react';
import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectKidsPants } from '../../store/reducers/kidsSlice';
import "../../styles/componentsStyle.css"


export const KidsPants = () => {
    const kidsItems = useSelector(selectKidsPants);

    return (
        <div className="container">
            <h2>Kids Pants Collection</h2>
            <ItemList items={kidsItems} category='kids'/>
        </div>
    );
}

