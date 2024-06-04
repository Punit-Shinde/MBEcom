import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";

import { clearErrors, getProduct } from "../../actions/product.Action.js";
import { useSelector, useDispatch } from "react-redux";

import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <div className="banner">
        <div className="banner-content">
          <h1>
            <span>Step</span>In<span>Style</span>
          </h1>
          <p>
            Where Every <span>Step</span> Becomes a <span>Statement</span>
          </p>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>

      <button className="toProductsBtn" onClick={() => navigate("/products")}>
        View More Products
      </button>
    </Fragment>
  );
};

export default Home;
