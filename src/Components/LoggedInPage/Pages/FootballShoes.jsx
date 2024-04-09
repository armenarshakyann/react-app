

   
    
    import { useContext, useState } from "react";
    import { InputContext } from "../../../App";
    let product = [
      {
        text: "Nike Air Max 97 By ",
        price: "$221.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96e729bf-2fb8-4111-afa6-def4dee65494/vapor-edge-shark-2-mens-football-cleats-dmdfQS.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$289.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bcaf8674-81aa-4893-92de-9afd32235cb2/vapor-edge-shark-2-mens-football-cleats-dmdfQS.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29e1b330-35e7-4c00-b129-c6df9f4557e1/vapor-edge-shark-2-mens-football-cleats-dmdfQS.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec1eadee-b610-405e-a329-1ebf554d6745/vapor-edge-shark-2-mens-football-cleats-dmdfQS.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf466b2b-4fb1-4b19-b648-77e00df6b0a0/vapor-edge-shark-2-mens-football-cleats-dmdfQS.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fd8f056-9cef-4644-84f3-e28c4e74d5b0/vapor-edge-shark-2-mens-football-cleats-dmdfQS.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      // 
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ddd6f3d0-48e2-4246-b03c-85104acacbf9/vapor-edge-pro-360-2-mens-football-cleats-BZbhLL.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f6ab8a1-cfd4-4411-bfa8-f322521ff861/vapor-edge-pro-360-2-mens-football-cleats-BZbhLL.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
      {
        text: "Nike Air Max 97 By ",
        price: "$277.99",
        img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/729ef440-f13d-4988-b29a-2ad060eeb47a/vapor-edge-pro-360-2-mens-football-cleats-BZbhLL.png",
        count: 1,
        id: Math.floor(Math.random() * 9999),
      },
    ];
   



function FootballShoes(){
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
export default FootballShoes;