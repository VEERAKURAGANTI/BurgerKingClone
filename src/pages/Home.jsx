import './Home.css';

import { Header } from '../componets/Header';
import { Slider } from '../componets/Slider';
import { OurMenu } from '../componets/OurMenu';
import { SlideContainer } from '../componets/SlideContainer';
import { ExploreWall } from '../componets/ExploreWall';
import { Footer } from '../componets/Footer';
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