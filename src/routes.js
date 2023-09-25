import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import { MenAll } from './components/Men/MenAll';
import { MenPants } from './components/Men/MenPants';
import { MenShoes } from './components/Men/MenShoes';
import { MenTShirts } from './components/Men/MenTShirts';
import { WomenAll } from './components/Women/WomenAll';
import { WomenPants } from './components/Women/WomenPants';
import { WomenShoes } from './components/Women/WomenShoes';
import { WomenTShirts } from './components/Women/WomenTShirts';
import { KidsAll } from './components/Kids/KidsAll';
import { KidsPants } from './components/Kids/KidsPants';
import { KidsTShirts } from './components/Kids/KidsTShirts';
import { KidsShoes } from './components/Kids/KidsShoes';
import { BestSellersAll } from './components/BestSellers/BestSellersAll';
import { BestSellersMen } from './components/BestSellers/BestSellersMen';
import { BestSellersWomen } from './components/BestSellers/BestSellersWomen';
import { BestSellersKids } from './components/BestSellers/BestSellersKids';
import { NewArrivalsAll } from './components/NewArrivals/NewArrivalsAll';
import { NewArrivalsMen } from './components/NewArrivals/NewArrivalsMen';
import { NewArrivalsWomen } from './components/NewArrivals/NewArrivalsWomen';
import { NewArrivalsKids } from './components/NewArrivals/NewArrivalsKids';
import { Cart } from './components/Cart/Cart';
import Item from './components/Item';


const AppRoutes = () => (
  <Router>
    <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/men/viewall" element={<Layout><MenAll /></Layout>} />
        <Route path="/men/shoes" element={<Layout><MenShoes /></Layout>} />
        <Route path="/men/pants" element={<Layout><MenPants /></Layout>} />
        <Route path="/men/t-shirts" element={<Layout><MenTShirts /></Layout>} />
        <Route path="/women/viewall" element={<Layout><WomenAll /></Layout>} />
        <Route path="/women/pants" element={<Layout><WomenPants /></Layout>} />
        <Route path="/women/shoes" element={<Layout><WomenShoes /></Layout>} />
        <Route path="/women/t-shirts" element={<Layout><WomenTShirts /></Layout>} />
        <Route path="/kids/viewall" element={<Layout><KidsAll /></Layout>} />
        <Route path="/kids/pants" element={<Layout><KidsPants /></Layout>} />
        <Route path="/kids/t-shirts" element={<Layout><KidsTShirts /></Layout>} />
        <Route path="/kids/shoes" element={<Layout><KidsShoes /></Layout>} />
        <Route path="/bestsellers/viewall" element={<Layout><BestSellersAll /></Layout>} />
        <Route path="/bestsellers/men" element={<Layout><BestSellersMen /></Layout>} />
        <Route path="/bestsellers/women" element={<Layout><BestSellersWomen /></Layout>} />
        <Route path="/bestsellers/kids" element={<Layout><BestSellersKids /></Layout>} />
        <Route path="/newarrivals/viewall" element={<Layout><NewArrivalsAll /></Layout>} />
        <Route path="/newarrivals/men" element={<Layout><NewArrivalsMen /></Layout>} />
        <Route path="/newarrivals/women" element={<Layout><NewArrivalsWomen /></Layout>} />
        <Route path="/newarrivals/kids" element={<Layout><NewArrivalsKids /></Layout>} />
        <Route path="/:category/:itemId/:itemName" element={<Layout><Item /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        {/* Other routes go here Add Layout to every route!!*/}
    </Routes>
  </Router>
);

export default AppRoutes;

