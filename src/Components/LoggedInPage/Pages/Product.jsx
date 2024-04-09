import { NavLink } from "react-router-dom";
import "./Product.scss";
import { useContext, useReducer, useState } from "react";
import { InputContext } from "../../../App";

function Product() {
  let theme = useContext(InputContext);
  let products2 = theme.state.map((item) => (
    <div className="new">
      <div className="divnew">
        <div className="imgdiv">
          <img src={item.img} alt="" className="newimg" />
        </div>
        <p className="pnew">{item.text}</p>
        <p className="pnew">{item.price}</p>
        <div className="countdiv">
        <button
            className="plusminus"
              onClick={() => {
                if(item.count >1){

                theme.dispatch({
                  type:"editCount",
                  peyload:{
                    ...item,
                    count: item.count -1
                  }
                 })
                }

              }}
            >
              -
            </button>
            <p className="pnew2">{item.count}</p>
            <button
             className="plusminus"
              onClick={() => {
                theme.dispatch({
                type:"editCount",
                peyload:{
                  ...item,
                  count: item.count +1
                }
               })
                // console.log(bascont.count);
              }}
            >
              +
            </button>
        </div>
        <button
          className="button"
          onClick={() => {
            theme.dispatch({
              type: "delete",
              payload: {
                id: item.id,
              },
            });
            console.log("wow");
          }}
        >
          <svg viewBox="0 0 448 512" class="svgIcon">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        </button>
      </div>
    </div>
  ));
  return <div className="big">{products2}</div>;
}

export default Product;
