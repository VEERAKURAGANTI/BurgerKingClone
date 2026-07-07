import './SearchBar.css';

import DetectLogo from '../../assets/icons/detect-location.svg';
import SearchIcon from '../../assets/icons/search-black.svg'

export function SearchBar() {
    return (
        <>
            <div className='search-bar'>
                <span className='detect'>
                    <img src={SearchIcon} alt="serach" className='detect-search-icon' width={30} height={30}/>
                    <input type="text" placeholder='search for your location' className='input-location' />
                    <div className='auto-location-detect'>
                        <img src={DetectLogo} alt="detect-location-logo" width={15} height={15}/>
                         <p>Detect location</p>
                    </div>             
                </span>
            </div>

        </>
    );
}