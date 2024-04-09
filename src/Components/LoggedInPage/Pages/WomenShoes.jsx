    
    
    import { useContext, useState } from "react";
import { InputContext } from "../../../App";
let product = [
  {
    text: "Nike Air Max 97 By ",
    price: "$221.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a3455f63-4a9e-4df0-af5f-17f889aa372e/air-jordan-1-low-se-womens-shoes-jxMXgH.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$289.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/337661a1-1166-460c-b2a2-1752e9863c7e/air-jordan-1-low-se-womens-shoes-jxMXgH.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aaf05494-6065-4650-96d6-c4c34b0f7a24/air-jordan-1-low-se-womens-shoes-jxMXgH.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/722ca0dd-e0f7-444e-afb3-2322e990e890/air-jordan-1-brooklyn-womens-boots-kd9QhX.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f42c5e2d-fadf-4d13-892a-e02dc277bc7d/air-jordan-1-brooklyn-womens-boots-kd9QhX.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/06888fee-96d8-4062-bc34-68170bb48144/air-jordan-1-brooklyn-womens-boots-kd9QhX.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  // 
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5309f94d-1e58-4f6c-bff0-2b34fbc6af6d/luka-2-basketball-shoes-vcXFrk.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ca2f221a-dec9-4770-84f7-6bbb63bb2266/luka-2-the-pitch-basketball-shoes-vcXFrk.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7196bf6b-fb84-4dcd-94ae-32e56df438fd/luka-2-bred-basketball-shoes-vcXFrk.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
];
    
    function WomenShoes(){
        let theme = useContext(InputContext);
        let products = product.map((item) => (
              <>
        
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
          </>
        ));
      
        return <div className="big">{products}</div>;
    }
    export default WomenShoes;