const ayceFreshRolls = "../static/ayceMenu/ayceFreshRolls.jpg";
const ayceTempuraRolls = "../static/ayceMenu/ayceTempuraRolls.jpg";
const ayceBakedRolls = "../static/ayceMenu/ayceBakedRolls.jpg";
const ayceSpecialItems = "../static/ayceMenu/ayceSpecialItems.jpg";
// const ayceBeverages = "../static/ayceMenu/ayceBeverages.jpg";

export default function newAyceMenu() {
  return (
    <div>
      <img src={ayceFreshRolls} loading="lazy" alt="Fresh Rolls"></img>
      <img src={ayceTempuraRolls} loading="lazy" alt="Tempura Rolls"></img>
      <img src={ayceBakedRolls} loading="lazy" alt="Baked Rolls"></img>
      <img src={ayceSpecialItems} loading="lazy" alt="Special Items"></img>
      {/* <img src={ayceBeverages}></img> */}
    </div>
  );
}
