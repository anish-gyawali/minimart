import "./Home.css";
import minimart from "../assets/minimart.jpg";
import image1 from "../assets/slideImage1.jpg";
import image2 from "../assets/slideImage2.jpg";
import image3 from "../assets/slideImage3.jpg";

function Home() {
  return (
    <div className="page-wrapper">
      <div className="carousel-container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="Welcome" />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Deals" />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="Shop Now" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1>Welcome to MiniMart</h1>
            <p>Your one-stop shop for daily essentials at affordable prices.</p>
          </div>
          <img src={minimart} alt="Shop Now" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
