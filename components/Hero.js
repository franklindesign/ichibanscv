import { useMediaQuery } from "react-responsive";
import React from "react";

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <img
            style={{ width: "100%" }}
            src="../static/heroes/ichiban-covid19.jpg"
            alt="30% OFF total order for take-out only."
          ></img>
        </>
      )}
      {isTabletOrMobileDevice && (
        <div>
          <img
            style={{ width: "100%" }}
            src="../static/heroes/30offTakeout.jpg"
            alt="30% OFF total order for take-out only."
          ></img>
          <img
            style={{ width: "100%" }}
            src="../static/heroes/lunchbentoboxtakeout.jpg"
            alt="Lunch Special: Bento Box for $9.95."
          ></img>
        </div>
      )}
    </div>
  );
}
