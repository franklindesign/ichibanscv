export default function Hero() {
  return (
    <>
      <a
        href="../static/coupons/ICHIBAN-50_OFF-COUPON.pdf"
        target="_blank"
        rel="noopener"
      >
        <img
          style={{ width: "100%" }}
          srcset="../static/ichiban-hero.jpg 320w,
             ../static/ichiban-hero.jpg 480w,
             ../static/ichiban-hero.jpg 800w"
          sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
          src="../static/ichiban-hero.jpg"
          alt="Save 50% on Sushi & Rolls"
        ></img>
      </a>
    </>
  );
}
