import {Header} from '../componets/home_componets/Header'
import './NearbyStore.css';

import { SearchBar } from '../componets/nearby_componts/SearchBar';
export function NearbyStore() {
    return (
        <>
            <div className="nearby-store">
                <Header />
                <SearchBar />
            </div>
        </>
    );
}