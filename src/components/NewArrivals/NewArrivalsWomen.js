import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectNewArrivalsWomen, selectFilteredNewArrivalsItems, applyFilter, clearFilters, selectCurrentFilters } from '../../store/reducers/newArrivalsSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const NewArrivalsWomen = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsWomen);
    const newArrivalsFilteredItems = useSelector((state) => selectFilteredNewArrivalsItems(state, newArrivalsItems));
    const currentFilters = useSelector(selectCurrentFilters)

    return (
        <div className="men-all-container">
            <h2>Women's New Arrivals</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters} />
            <ItemList items={newArrivalsFilteredItems} category='newarrivals' />
        </div>
    );
}

