import './OfferHeader.css';

import Crown from '../../assets/crown.png'
export function OfferDeader(){
    return(
        <>
           <div className="offer-header">

                <div className="offer-header__details">
                    <p className="offer-header__title">king deals</p>

                    <div className="rst-or-type rst-or-type_offer">
                        <div role="presentation" class="u_cursor_pointer rst-or-type__item takeaway ">on delivery</div>
                        <div role="presentation" class="u_cursor_pointer rst-or-type__item takeaway rst-or-type__item_active ">dine in/takeaway</div>
                    </div>

                    <div className="offer-header__crown u_cursor_pointer">
                        <div className="offer-crown-value">
                            <img src={Crown} alt="offer"  width={40} height={30}/>
                            <span className="offer-crown-value__value">500</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}