import { selectBestSellersMen } from '../../store/reducers/bestSellersSlice';
import { selectNewArrivalsWomen } from '../../store/reducers/newArrivalsSlice';
import { useSelector } from 'react-redux';
import HomePageSlider from './HomePageSlider';
import '../../styles/homePage.css'

function HomePage() {
    const bestSellers = useSelector(selectBestSellersMen);
    const newArrivals = useSelector(selectNewArrivalsWomen);
    console.log(bestSellers);

    return (
        <>
            <div className='home-page-slider-div'>
                <HomePageSlider data={bestSellers} fromCategory='NewCollection' />
                <HomePageSlider data={newArrivals} fromCategory='WhatsHot' />
            </div>
        </>
    );
}

export default HomePage;
