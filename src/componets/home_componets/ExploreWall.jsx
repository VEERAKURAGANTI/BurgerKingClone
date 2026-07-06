import {NavLink} from 'react-router-dom' ;
import ExploreWallImg from '../../assets/exploreTheBKWall.jpg';

import './ExploreWall.css';

export function ExploreWall(){
  return(
    <div className="container">
     <NavLink className="menu-btn"><button>explore full menu</button></NavLink>
     <NavLink className="explore-wall">
        <img src={ExploreWallImg} alt="explore-wall" />
     </NavLink>
    <div className='copy-right'><p><b>Disclamer :</b> All Images used are illustrative and strictly for representational purposes only</p></div>
    </div>
  );
}
