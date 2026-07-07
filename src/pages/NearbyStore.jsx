import { Header } from '../componets/home_componets/Header';
import { RestaurantCard } from '../componets/nearby_componts/RestaurantCard';
import './NearbyStore.css';

import { SearchBar } from '../componets/nearby_componts/SearchBar';
export function NearbyStore() {
    return (
        <>
            <div className="nearby-store">
                <div className='header'>
                    <Header />
                </div>
                <div className='search-bar'>
                    <SearchBar />
                </div>
                <RestaurantCard />
            </div>
        </>
    );
}