import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectMenAll, selectFilteredMenItems, applyFilter, clearFilters, selectCurrentFilters } from '../../store/reducers/menSlice';
import "../../styles/componentsStyle.css"
import FilterComponent from '../Filters/FilterComponent';


export const MenAll = () => {
    const menItems = useSelector(selectMenAll);
    const menFilteredItems = useSelector((state) => selectFilteredMenItems(state, menItems));
    const currentFilters = useSelector(selectCurrentFilters)


    return (
        <div className="men-all-container">
            <h2>Men's Collection</h2>
            <FilterComponent callingComponent='all' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters} />
            <ItemList items={menFilteredItems} category='men' />
        </div>
    );
}

