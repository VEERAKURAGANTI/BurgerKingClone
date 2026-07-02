import './Home.css';
import { Header } from '../componets/Header';
import { Slider } from '../componets/Slider';
import {OurMenu} from '../componets/OurMenu';
export function Home() {
    return (
        <>
            <Header />
            <Slider />
            <OurMenu />
        </>
    );
}