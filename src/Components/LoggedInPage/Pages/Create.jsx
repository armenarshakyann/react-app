import { useContext, useState } from "react";
import "./Create.scss";

import { InputContext } from "../../../App";
let product = [
  {
    text: "Nike Air Max 97 By ",
    price: "$221.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c4141fd0-d83b-45b0-9eac-0121db1b78fa/custom-something-for-thee-hotties-shoes.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$289.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2e83f610-9a36-4c89-85d0-50051a8c7e96/custom-nike-air-max-97-shoes-by-you.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cc11861c-e016-4925-a669-a9f8aa6ee356/custom-nike-air-max-97-shoes-by-you.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
];
function Create() {
  let theme = useContext(InputContext);
  let products = product.map((item) => (
    <div className="new">
      <div className="divnew">
        <img src={item.img} alt="" className="newimg" />
        <p className="pnew">{item.text}</p>
        <p className="pnew">{item.count}</p>
        <p className="pnew">{item.price}</p>
        <button
          className="bookmarkBtn"
          onClick={() => {
            theme.dispatch({
              type: "basket",
              payload: {
                ...item,
              },
            });

            console.log(theme.state);
          }}
        >
          <span class="IconContainer">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
          </span>
          <p class="text">Basket</p>
        </button>
      </div>
    </div>
  ));

  return <div className="big">{products}</div>;
}
export default Create;
