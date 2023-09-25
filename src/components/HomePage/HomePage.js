import React from 'react';
import BestSellersGrid from './BestSellersSlider';
import NewArrivalsGrid from './NewArrivalsSlider';

function HomePage() {
    return (
        <div>
            <BestSellersGrid />
            <NewArrivalsGrid />
        </div>
    );
}

export default HomePage;
