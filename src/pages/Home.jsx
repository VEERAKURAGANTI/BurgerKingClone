import './Home.css';
import { Header } from '../componets/Header';
import { Slider } from '../componets/Slider';
export function Home() {
    return (
        <>
            <Header />
            <Slider />
            <h1>Home page</h1>
        </>
    );
}