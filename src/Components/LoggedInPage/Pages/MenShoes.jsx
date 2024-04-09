   
    
    import { useContext, useState } from "react";
    import { InputContext } from "../../../App";
    let product = [
      {
        text: "Nike Air Max 97 By ",
        price: "$221.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-mens-shoes-5FQWGR.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$289.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9cfd9c6d-59cb-4dac-af4f-1552ddc58d36/dunk-low-retro-mens-shoes-5FQWGR.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8ea9265-77b0-4b69-8e33-275c99ef5915/dunk-low-retro-mens-shoes-1xlGBR.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/022608da-9fac-43a6-9b9c-a660d86e0f4a/dunk-low-shoes-1xlGBR.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-1xlGBR.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f557b1f-ba79-419c-a814-f7b5d117fbb2/dunk-low-retro-mens-shoes-1xlGBR.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      // 
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc4622c4-2769-4665-aa6e-42c974a7705e/air-force-1-07-mens-shoes-jBrhbr.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoes-jBrhbr.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
    ];
   
   function MenShoes(){
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

   export default MenShoes;