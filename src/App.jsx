import './App.css'
import { Home } from '../src/pages/Home';
import { NearbyStore } from '../src/pages/NearbyStore';
import { KingDeals } from '../src/pages/KingDeals';
import { MyProfile } from '../src/pages/MyProfile';
import { Cart } from '../src/pages/Cart';
import { Search } from '../src/pages/Search';
import { SearchLocation } from '../src/pages/SearchLocation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/nearby-store' element={<NearbyStore />}></Route>
        <Route path='/king-deals' element={<KingDeals />}></Route>
        <Route path='/my-profile' element={<MyProfile />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/search-location' element={<SearchLocation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
