import { useSelector } from 'react-redux';
import { ItemList } from '../ItemList';
import { selectBestSellersAll, selectFilteredBestSellersItems, applyFilter , clearFilters, selectCurrentFilters } from '../../store/reducers/bestSellersSlice';
import FilterComponent from '../Filters/FilterComponent';
import "../../styles/componentsStyle.css"


export const BestSellersAll = () => {
    const bestSellersItems = useSelector(selectBestSellersAll);
    const bestSellersFilteredItems = useSelector((state) => selectFilteredBestSellersItems(state,bestSellersItems))
    const currentFilters = useSelector(selectCurrentFilters)

    return (
        <div className="men-all-container">
            <h2>Best Sellers</h2>
            <FilterComponent callingComponent='' applyFilter={applyFilter} clearFilters={clearFilters} currentFilters={currentFilters}/>
            <ItemList items={bestSellersFilteredItems} category='bestsellers'/>
        </div>
    );
}

