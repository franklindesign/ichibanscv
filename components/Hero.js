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
        <div>
          <img
            style={{ width: "100%" }}
            src="../static/heroes/ichiban-hero-new-patio.jpg"
            alt="Outdoor seating offer: 20% OFF Sushi, Sashimi, and Rolls."
          ></img>
        </div>
      )}
      {isTabletOrMobileDevice && (
        <div>
          <img
            style={{ width: "100%" }}
            src="../static/heroes/Outdoor-dining-offer.jpg"
            alt="Outdoor seating offer: 20% OFF Sushi, Sashimi, and Rolls."
          ></img>
          <img
            style={{ width: "100%" }}
            src="../static/heroes/outdoor-seating.jpg"
            alt="Our patio is now open for outdoor seating."
          ></img>

          {/* <img
            style={{ width: "100%" }}
            src="../static/heroes/lunchbentoboxtakeout.jpg"
            alt="Lunch Special: Bento Box for $9.95."
          ></img> */}
        </div>
      )}
    </div>
  );
}
