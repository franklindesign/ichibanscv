import { useMediaQuery } from "react-responsive";
import React from "react";
import Link from "../src/Link";

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      <Link href="/menu">
        {isDesktopOrLaptop && (
          <img
            style={{ width: "100%" }}
            src="../static/heroes/oysterBar.jpg"
            alt="Our oyster bar is now open!"
          ></img>
        )}
        {isTabletOrMobileDevice && (
          <div>
            <img
              style={{ width: "100%" }}
              src=".../static/heroes/oysterBar.jpg"
              alt="Our oyster bar is now open!"
            />
          </div>
        )}
      </Link>
    </>
  );
}
