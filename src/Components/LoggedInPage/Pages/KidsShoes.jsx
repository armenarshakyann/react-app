
    
    
    import { useContext, useState } from "react";
    import { InputContext } from "../../../App";
    let product = [
      {
        text: "Nike Air Max 97 By ",
        price: "$221.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e63cceec-a9a3-4e65-bcb3-fb9f32e5cdcf/jordan-1-retro-high-og-black-white-baby-toddler-shoes-lkqmlC.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$289.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c76bab63-cc37-4eaa-b03b-884c42b80f8d/air-jordan-1-high-og-black-white-big-kids-shoes-Qv803M.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd9987cc-0eb6-48fc-b5b4-3f4d354abb7a/jordan-1-retro-high-og-black-white-little-kids-shoes-pgVgBz.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8ee36a5d-098b-4706-a5f9-b3c135d9209c/jordan-1-baby-crib-bootie-4Txjjj.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9fb42bb7-30e1-4ada-bc0d-7fc23d37d565/jordan-3-retro-ivory-little-kids-shoes-jdfbK4.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dbf2d770-01cf-4d38-afc3-84885b1c4aaf/air-max-1-easyon-little-kids-shoes-mx0nl8.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      // 
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb676f88-f6f2-4373-8ea6-0ea462d2e4e4/air-max-1-easyon-little-kids-shoes-mx0nl8.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a09edcf-114d-470b-969c-f477c12bfa43/air-max-1-easyon-little-kids-shoes-mx0nl8.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cea7dce1-4789-4ea4-85f1-c8ab92b82f0b/air-max-1-easyon-little-kids-shoes-mx0nl8.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
    ];

function KidsShoes(){
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
export default KidsShoes;