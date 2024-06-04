import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cart.Action";
import { useAlert } from "react-alert";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const dispatch = useDispatch();
  const alert = useAlert();

  const addItemsToCartHandler = () => {
    dispatch(addItemsToCart(product._id));
    alert.success("item Added To Cart");
  };

  return (
    <>
    <div className="productCard">
      <Link  to={`/product/${product._id}`}>
      <div className="imageContainer">
        <img src={product.images[0].url} alt={product.name} />
      </div>
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span className="productCardSpan">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
    </Link>
    <div className="pna">
      <span>{`₹${product.price}`}</span>
    <button onClick={addItemsToCartHandler}>Add To Cart</button>
    </div>
    </div>
    </>
  );
};

export default ProductCard;
