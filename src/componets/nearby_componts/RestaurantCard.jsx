import './RestaurantCard.css';
import CallIcon from '../../assets/icons/call-icon.svg';
import DirectionLocation from '../../assets/icons/location-direction.svg';




const restaurantDetails = [
    {
        name: 'PVP Square, Vijayawada',
        time: 'Store Timing (11.00 AM-11.00 PM)',
        description: 'GROUND & FIRST FLOOR, DOOR NO. 59A-1-3, POSTAL COLONY, ADJ. LEPLCON MALL, PATAMATA, VIJAYAWADA, West Godavari, Andhra Pradesh-520007',
        restaurantStatus: false,
        range: '0 km away · 0 mins'
    },
    {
        name: 'MG Road, Vijayawada',
        time: 'Store Timing (10.00 AM-10.00 PM)',
        description: 'MG ROAD, BESIDE TRENDSET MALL, VIJAYAWADA, Andhra Pradesh-520010',
        restaurantStatus: true,
        range: '2 km away · 5 mins'
    },
    {
        name: 'Benz Circle, Vijayawada',
        time: 'Store Timing (11.00 AM-11.00 PM)',
        description: 'BENZ CIRCLE, NEAR NTR STATUE, VIJAYAWADA, Andhra Pradesh-520008',
        restaurantStatus: true,
        range: '3 km away · 8 mins'
    },
    {
        name: 'Guntur City Center',
        time: 'Store Timing (12.00 PM-11.00 PM)',
        description: 'CITY CENTER MALL, BRODIPET, GUNTUR, Andhra Pradesh-522002',
        restaurantStatus: false,
        range: '35 km away · 45 mins'
    },
    {
        name: 'Tenali Main Road',
        time: 'Store Timing (11.00 AM-10.00 PM)',
        description: 'TENALI MAIN ROAD, NEAR RTC COMPLEX, TENALI, Andhra Pradesh-522201',
        restaurantStatus: true,
        range: '5 km away · 12 mins'
    },
    {
        name: 'Eluru Market Street',
        time: 'Store Timing (10.30 AM-10.30 PM)',
        description: 'MARKET STREET, ELURU, West Godavari, Andhra Pradesh-534001',
        restaurantStatus: false,
        range: '60 km away · 1 hr 20 mins'
    },
    {
        name: 'Rajahmundry Mall',
        time: 'Store Timing (11.00 AM-11.00 PM)',
        description: 'MAIN ROAD, NEAR RAILWAY STATION, RAJAHMUNDRY, Andhra Pradesh-533101',
        restaurantStatus: true,
        range: '120 km away · 2 hrs'
    },
    {
        name: 'Kakinada Beach Road',
        time: 'Store Timing (12.00 PM-11.00 PM)',
        description: 'BEACH ROAD, KAKINADA, East Godavari, Andhra Pradesh-533002',
        restaurantStatus: false,
        range: '150 km away · 2 hrs 30 mins'
    },
    {
        name: 'Ongole Center',
        time: 'Store Timing (11.00 AM-10.00 PM)',
        description: 'NEAR RTC BUS STAND, ONGOLU, Andhra Pradesh-523001',
        restaurantStatus: true,
        range: '180 km away · 3 hrs'
    },
    {
        name: 'Nellore Highway',
        time: 'Store Timing (10.00 AM-11.00 PM)',
        description: 'NH16 HIGHWAY, NEAR KVR PETROL BUNK, NELLORE, Andhra Pradesh-524001',
        restaurantStatus: true,
        range: '300 km away · 5 hrs'
    }
];

export function RestaurantCard() {

    return (
        <>
            <div className='restaurant-card'>
                <div className='restaurant-details'>
                    {restaurantDetails.map((restaurant, index) => (
                        <div className='card'>
                            <div className='deatails' key={index}>
                                <p>{restaurant.name}</p>
                                <p>{restaurant.time}</p>
                                <p>{restaurant.description}</p>
                                <p className={restaurant.restaurantStatus ? 'open' : 'closed'}>{restaurant.restaurantStatus==true?'Open Now':'Closed'}</p>
                                <p>{restaurant.range}</p>
                            </div>
                            <div className='icons'>
                                <img src={CallIcon} alt="call-icon" />
                                <img src={DirectionLocation} alt="direction-icon" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>

    );
}