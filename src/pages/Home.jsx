import './Home.css';

import { Header } from '../componets/home_componets/Header';
import { Slider } from '../componets/home_componets/Slider';
import { OurMenu } from '../componets/home_componets/OurMenu';
import { SlideContainer } from '../componets/home_componets/SlideContainer';
import { ExploreWall } from '../componets/home_componets/ExploreWall';
import { Footer } from '../componets/home_componets/Footer';
export function Home() {
    return (
        <>
            <div className='header'> <Header /></div>
            <Slider />
            <OurMenu />
            <SlideContainer />
            <ExploreWall />
            <Footer />
        </>
    );
}