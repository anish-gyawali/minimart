import minimart from "../assets/minimart.jpg";
import "./Product.css";
function Product() {
  return (
    <>
      <div className="product-container">
        <div class="card" style={{ width: "18rem" }}>
          <img src={minimart} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src={minimart} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src={minimart} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <p>$12</p>
            <a href="#" class="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
