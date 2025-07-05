import "./Home.css";
import minimart from "../assets/minimart.jpg";
function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to MiniMart</h1>
          <p>Your one-stop shop for daily essentials at affordable prices.</p>
        </div>
        <img src={minimart} alt="Shop Now" className="home-image" />
      </div>
    </div>
  );
}

export default Home;
