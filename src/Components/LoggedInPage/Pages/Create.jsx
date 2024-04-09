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
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0c252cec-c031-4fc3-aff4-3636178db899/custom-something-for-thee-hotties-shoes.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/74678322-e2c4-48be-979c-916d85a5a258/custom-something-for-thee-hotties-shoes.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/732c17eb-1676-4cf6-98d4-ef82e06c308e/custom-something-for-thee-hotties-shoes.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  // 
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ebef2e5f-bd5b-4a33-b009-e13f7875c21d/custom-nike-air-max-97-shoes-by-you.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/50910529-d289-457d-b264-20aab6ba73ec/custom-nike-air-max-97-shoes-by-you.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
  {
    text: "Nike Air Max 97 By ",
    price: "$277.99",
    img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6d17a039-44f9-4fba-902d-92ab77689cee/custom-nike-air-max-97-shoes-by-you.png",
    count: 1,
    id: Math.floor(Math.random() * 9999),
  },
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
function Create() {
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
export default Create;
