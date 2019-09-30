import Carousel from "nuka-carousel";

export default class extends React.Component {
  render() {
    return (
      <Carousel
        autoplay
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>Previous</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>Next</button>
        )}
      >
        <img src="../static/happyhour.jpg" />
        <img src="../static/happyhour.jpg" />
        <img src="../static/happyhour.jpg" />
      </Carousel>
    );
  }
}
