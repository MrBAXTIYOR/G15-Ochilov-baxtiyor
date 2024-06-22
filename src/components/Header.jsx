import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from "../Context/ShopContext";

const Header = () => {
  const {getTotalCartItems} = useContext(Context);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={`/`}>
          <h2 id="ww" className="text-[25px]">FakeShop</h2>
        </Link>
        <Link to={`/add`} className="text-[25px] ml-5 border border-black">Add product</Link>
        <Link to={`cardDetail`}>
          <AiOutlineShoppingCart className="shopCard" />
          <div className="shopCardCount">
            <p>{getTotalCartItems()}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
