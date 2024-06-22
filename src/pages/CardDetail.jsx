import { v4 as uuidv4 } from "uuid";
import remove_icon from "../assets/cart_cross_icon.png";
import { useContext } from "react";
import { Context } from "../Context/ShopContext";
const CardDetail = () => {
  const { products, cartItems, removeCart, getTotalCartAmount } = useContext(Context);
  return (
    <div>
      <div className="carditems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {products.map((e) => {
          if (cartItems[e.id] > 0) {
            <div key={uuidv4()}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="product name" className="carticon-product-icon" />
                <p>{e.title}</p>
                <p>${e.price}</p>
                <button className="cartitems-quantity">
                  <button> - </button>1<button> + </button>
                </button>
                <p>${e.price}</p>
                <img src={remove_icon} className="cartitems-remove-icon" alt="" onClick={() => removeCart(e.id)} />
              </div>
              ;
              <hr />
            </div>;
          }
        })}

        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>$1000dan oshsa bepul oshmasa $50 boladi</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
