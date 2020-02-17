export default function Hero() {
  return (
    <>
      <img
        style={{ width: "100%" }}
        srcSet="../static/heroes/ichiban-hero-newLunch-480.jpg 320w,
             ../static/heroes/ichiban-hero-newLunch-480.jpg 480w,
             ../static/heroes/ichiban-hero-newLunch.jpg 800w"
        sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
        src="../static/heroes/ichiban-hero-newLunch.jpg"
        alt="New Lunch Special Items: Bento Box and Ramen/Udon Combo for $9.95 each"
      ></img>
      {/* <img
        style={{ width: "100%" }}
        srcSet="../static/heroes/ichiban-hero.jpg 320w,
             ../static/heroes/ichiban-hero.jpg 480w,
             ../static/heroes/ichiban-hero.jpg 800w"
        sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
        src="../static/heroes/ichiban-hero.jpg"
        alt="Order Lunch Special Items for $7.95 each"
      ></img> */}
    </>
  );
}
