import { useContext, useEffect } from "react";
import { Context } from "../Context/ShopContext";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { products, addToCart } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!products) {
      navigate("/");
    }
  }, [products]);

  const Product = products.find((pro) => pro.id === Number(id));
  const { image, title, price, description, category } = Product;
  return (
    <>
      {Product ? (
        <div className="ui grid container">
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt="product" />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <h3 className="ui teal tag label">${price}</h3>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="content" onClick={() => addToCart(id)}>
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No Data"
      )}
    </>
  );
};

export default ProductDetail;
