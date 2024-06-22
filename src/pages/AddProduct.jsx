import React, { useContext } from "react";
import { Context } from "../Context/ShopContext";

function AddProduct() {
  const { addProduct } = useContext(Context);

  const formSubmit = (e) => {
    e.preventDefault();

    const inputObj = {
      title: e.target[0].value,
      price: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
      category: e.target[4].value,
    };

    addProduct(inputObj);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
  };
  return (
    <div>
      <h1 style={{ marginTop: "100px" }} className="text-[30px] mb-[15px]">
        AddProduct page
      </h1>
      <form className="flex flex-col gap-3" onSubmit={formSubmit}>
        <input type="text" placeholder="Mahsulot nomi" className="border rounded p-2 " />
        <input type="number" placeholder="Mahsulot narxi" className="border rounded p-2 " />
        <input type="text" placeholder="Image URL" className="border rounded p-2 " />
        <input type="text" placeholder="Mahsulot ma'lumotlari description" className="border rounded p-2 " />
        <input type="text" placeholder="Mahsulot kategoriyasi " className="border rounded p-2 " />
        <button type="submit" className="border border-gray-400 p-2 bg-blue-400">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
