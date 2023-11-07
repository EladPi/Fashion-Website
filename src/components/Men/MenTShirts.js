import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenTShirts, selectFilteredMenItems, applyFilter, clearFilters, selectCurrentFilters } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"
import FilterComponent from '../Filters/FilterComponent';


export const MenTShirts = () => {
    const menItems = useSelector(selectMenTShirts);
    const menFilteredItems = useSelector((state) => selectFilteredMenItems(state, menItems));
    const currentFilters = useSelector(selectCurrentFilters)

    return (
        <div className="men-all-container">
            <h2>Men T-Shirts Collection</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters} />
            <ItemList items={menFilteredItems} category='men' />
        </div>
    );
}

