import { Header } from "../componets/home_componets/Header";
import { OfferHeader } from "../componets/deals_componets/OfferHeader";
export function KingDeals() {
    return (
        <>
            <div className="header"><Header /></div>        
            <OfferHeader />
        </>
    );
}