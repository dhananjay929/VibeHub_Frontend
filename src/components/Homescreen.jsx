import React, { useState, useEffect }  from "react";
import Homeright from "./Homeright";
import Homemid from "./Homemid";
import Subnav from "./Subnav";

const Homescreen = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 700);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 700);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isWideScreen ? (
        <>
          <div id="home">
            <Homemid />
            <Homeright />
          </div>
        </>
      ) : (
        <>
          <Subnav />
          <Homemid />
        </>
      )}
    </>
  );
};

export default Homescreen;
