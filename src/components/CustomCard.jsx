import "./Customcard.css";

function CustomCard({ image, title, price, description, btnName }) {
  return (
    <div className="custom-card card" style={{ width: "18rem" }}>
      <img src={image} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{description}</p>
        <a href="#" class="btn btn-primary">
          {btnName}
        </a>
      </div>
    </div>
  );
}
export default CustomCard;
