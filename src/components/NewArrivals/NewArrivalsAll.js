import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectNewArrivalsAll, selectFilteredNewArrivalsItems, applyFilter, clearFilters, selectCurrentFilters } from '../../store/reducers/newArrivalsSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const NewArrivalsAll = () => {
    const newArrivalsItems = useSelector(selectNewArrivalsAll);
    const newArrivalsFilteredItems = useSelector((state) => selectFilteredNewArrivalsItems(state, newArrivalsItems));
    const currentFilters = useSelector(selectCurrentFilters)

    return (
        <div className="men-all-container">
            <h2>New Arrivals</h2>
            <FilterComponent callingComponent='all' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters} />
            <ItemList items={newArrivalsFilteredItems} category='newarrivals' />
        </div>
    );
}

