import CustomCard from "../components/Customcard";
import shoes from "../assets/shoes.jpg";
import bag from "../assets/bag.jpg";
import camera from "../assets/camera.jpg";
import mouse from "../assets/mouse.jpg";
import speaker from "../assets/speaker.jpg";
import watch from "../assets/watch.jpg";
import "./Product.css";

function Product() {
  return (
    <>
      <div className="product-container">
        <CustomCard
          image={shoes}
          title={"Nike Shoes"}
          price={"$165"}
          description={"This is Nike Shoes"}
          btnName={"Add To Cart"}
        />

        <CustomCard
          image={bag}
          title={"Bag"}
          price={"$12"}
          description={"This is bag"}
          btnName={"Add To Cart"}
        />

        <CustomCard
          image={camera}
          title={"Camera"}
          price={"$500"}
          description={"This is Camera"}
          btnName={"Add To Cart"}
        />
        <CustomCard
          image={mouse}
          title={"Mouse"}
          price={"$50"}
          description={"This is Computer Mouse"}
          btnName={"Add To Cart"}
        />
        <CustomCard
          image={speaker}
          title={"Speaker"}
          price={"$250"}
          description={"This is Speaker"}
          btnName={"Add To Cart"}
        />
        <CustomCard
          image={watch}
          title={"Watch"}
          price={"$550"}
          description={"This is Watch"}
          btnName={"Add To Cart"}
        />
      </div>
    </>
  );
}
export default Product;
