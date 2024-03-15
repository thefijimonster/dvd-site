import {React} from "react";
import "../App.css";
import '../index.css';
import { useEffect, useState } from "react";
import WORKSHOP_landscape from "./WORKSHOP_L";
import WORKSHOP_portrait from "./WORKSHOP_P";

const WORKSHOP = () => {

    const [orientation, setOrientation] = useState('portrait');

    useEffect(() => {
        const handleOrientationChange = () => {
        const isLandscape = Math.abs(window.orientation) === 90;
        setOrientation(isLandscape ? 'landscape' : 'portrait');
        };

        window.addEventListener('orientationchange', handleOrientationChange);

        // Initial orientation check
        handleOrientationChange();

        return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
        };
    }, []);

    return (
        <div>
        {orientation === 'landscape' ? <WORKSHOP_landscape /> : <WORKSHOP_portrait />}
        </div>
    );
};

export default WORKSHOP;