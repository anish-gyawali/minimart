import { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "../components/Customcard";
import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, seCurrentPage] = useState(1);

  //decide how many items per page
  const itemsPerPage = 8;

  //calculate which item to show
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToShow = products.slice(start, end);

  //calculate how many total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  //handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      seCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {itemsToShow.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <CustomCard
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              btnName={"Add To Cart"}
            />
          </div>
        ))}
      </div>

      {/* Bootstrap Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {/* Previous Button */}
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((item, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Product;
