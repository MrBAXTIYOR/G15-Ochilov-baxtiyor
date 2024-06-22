import React, { useContext } from "react";
import { Context } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const Card = () => {
  const { products } = useContext(Context);

  return (
    <>
      {products
        ? products.map((pro) => (
            <div className="four wide column" key={pro.id}>
              <Link to={`/product/${pro.id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={pro.image} alt={pro.title} />
                    </div>
                    <div className="content">
                      <div className="header">{pro.title}</div>
                      <div className="meta price">$ {pro.price}</div>
                      <div className="meta">{pro.category}</div>
                      <div className="meta font-extrabold">{pro.description}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        : <h2 className="mt-[100px] text-[50px]">No product</h2>}
    </>
  );
};

export default Card;
