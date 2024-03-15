import {React} from "react";
import "../App.css";
import '../index.css';

import { useEffect, useState } from "react";
import WORKSHOP_landscape from "./WORKSHOP_L";
import WORKSHOP_portrait from "./WORKSHOP_P";
import MediaQuery from "react-responsive";

const WORKSHOP = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      setOrientation(isLandscape ? 'landscape' : 'portrait');
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set your threshold here, 768px is commonly used for tablets and mobile devices
    };

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleOrientationChange();
    handleResize();

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        orientation === 'landscape' ? <WORKSHOP_landscape /> : <WORKSHOP_portrait />
      ) : (
        <WORKSHOP_portrait/>
      )}
    </div>
  );
};

export default WORKSHOP;