import Carousel from "nuka-carousel";

export default class extends React.Component {
  render() {
    return (
      <Carousel
        autoplay="true"
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>Previous</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>Next</button>
        )}
      >
        <img src="../static/happyhour.jpg" loading="lazy" />
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"
          loading="lazy"
        />
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"
          loading="lazy"
        />
      </Carousel>
    );
  }
}
