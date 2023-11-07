import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectKidsShoes, selectFilteredKidsItems, applyFilter, clearFilters, selectCurrentFilters } from '../../store/reducers/kidsSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const KidsShoes = () => {
    const kidsItems = useSelector(selectKidsShoes);
    const kidsFilteredItems = useSelector((state) => selectFilteredKidsItems(state, kidsItems));
    const currentFilters = useSelector(selectCurrentFilters)

    return (
        <div className="men-all-container">
            <h2>Kids Shoes Collection</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters} />
            <ItemList items={kidsFilteredItems} category='kids' />
        </div>
    );
}

