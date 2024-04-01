import { NavLink } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="big2">
      <div className="divcenter">
        <video width="100%" height="100%" muted autoPlay loop>
          <source src="Video/nikeair.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="product-title">
        <div className="divt">
          <p className="pt">AIR MAX PLUS DRIFT</p>
          <p className="plite">
            Durable layers, extra traction, and lace protection — the next gen
            of Air Max is here.
          </p>
          <div className="btndiv">
            <NavLink to="/product">
              <button className="shop">Shop</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="imgshome">
        <div className="img-title">
          <p className="pimgtitle">Latest & Greatest</p>
        </div>
        <div className="div-photos">
          <div className="first-divs">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_451,c_limit/49355697-e916-43bb-a168-ae2a7a9e9a93/nike-just-do-it.jpg"
              alt=""
              className="ph8"
            />
          </div>
          <div className="first-divs">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_451,c_limit/9ff6625e-1c65-4ca2-b492-75ea43f27d12/nike-just-do-it.jpg"
              alt=""
              className="ph8"
            />
          </div>
          <div className="first-divs">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_451,c_limit/3421fd64-6730-4934-ab31-75d008f13a97/nike-just-do-it.jpg"
              alt=""
              className="ph8"
            />
          </div>
        </div>
      </div>
      <div className="airslength">
        <div className="div-txt">
          <p className="airs">Shop Our Icons</p>
        </div>

        <div className="div-airs">
          <div className="div-airfirst">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1470,c_limit/5ebb9908-051a-4f30-8758-1d82784ad33c/nike-just-do-it.png"
              alt=""
              className="airsimg"
            />
          </div>
          <div className="div-airfirst">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1470,c_limit/efd6d877-ff29-4fa0-83b3-6bd7ef7bb844/nike-just-do-it.png"
              alt=""
              className="airsimg"
            />
          </div>
          <div className="div-airfirst">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1470,c_limit/442ec947-ed28-4d9b-a747-d044ce640b8d/nike-just-do-it.png"
              alt=""
              className="airsimg"
            />
          </div>
          <div className="div-airfirst">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1470,c_limit/db1f6cd7-74bd-4d58-b7fa-5b1863bde49b/nike-just-do-it.png"
              alt=""
              className="airsimg"
            />
          </div>
        </div>
      </div>
      <div className="div-area">
        <div className="area-title">
          <p className="areap">Shop By Sport</p>
        </div>

        <div className="area-div">
          <div className="areas1">
          <NavLink to="/product">
            <button className="basketballbtn">Basketball</button>
            </NavLink>
          </div>
          <div className="areas2">
          <NavLink to="/product">
            <button className="footballbtn">Football</button>
            </NavLink>
          </div>
          <div className="areas3">
          <NavLink to="/product">
            <button className="gymbtn">Gym</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="trending">
        <div className="trendingtitle">
          <p className="ptrending">Trending This Week</p>
        </div>

        <div className="trending-div">
          <div className="trending-prod">
            <img
              src="       https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/10186317-8ced-4b16-8750-6a0cd660ea25/court-borough-low-recraft-older-shoes-M6Jbw2.png"
              alt=""
              className="imgtrending"
            />
            <p className="ptr">Nike Flex Runner 2</p>
            <p className="ptr2">Younger Kids' Shoes</p>
            <p className="trprice">£52.99</p>
          </div>
          <div className="trending-prod">
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/d5a172a4-63de-4a03-b043-06649a0be10c/dunk-low-younger-shoes-2tqqwT.png"
              alt=""
              className="imgtrending"
            />
            <p className="ptr">Nike Dunk Low</p>
            <p className="ptr2">Younger Kids' Shoes</p>
            <p className="trprice">£32.99</p>
          </div>
          <div className="trending-prod">
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/c6c1b0a3-60ed-40d2-9aca-341468fb222e/react-vision-shoe-gHxlbR.png"
              alt=""
              className="imgtrending"
            />
            <p className="ptr">Nike React Vision</p>
            <p className="ptr2">Younger Kids' Shoes</p>
            <p className="trprice">£129.99</p>
          </div>
        </div>
      </div>

      <div className="div-peoples">
        <div className="people-title">
          <p className="p-peoplet">Explore More</p>
        </div>
        <div className="people-area">
          <div className="peoples-i">
          <NavLink to="/product">
            <button className="wm">Women</button>
            </NavLink>
          </div>
          <div className="peoples-i2">
          <NavLink to="/product">
            <button className="wm2">Men</button>
            </NavLink>
          </div>
          <div className="peoples-i3">
          <NavLink to="/product">
            <button className="wm3">Kids</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="div-orange">
        <div className="orange-title">
          <p className="porange">Nike Membership</p>
        </div>

        <div className="orange-area">
          <div className="orangediv">
            <div className="texts-orange">
              <p className="pbgo">Movement Where You're At</p>
              <NavLink to="/product">
              <button className="buy">Shop</button>
              </NavLink>
            </div>
          </div>
          <div className="orangediv2">
            <div className="texts-orange">
              <p className="pbgo">Movement Where You're At</p>
              <NavLink to="/product">
              <button className="buy">Shop</button>
              </NavLink>
            </div>
          </div>
          <div className="orangediv3">
            <div className="texts-orange">
              <p className="pbgo">Movement Where You're At</p>
              <NavLink to="/product">
              <button className="buy">Shop</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="div-foot">
        <div className="powered">
          <p className="power">
            {" "}
            Powered By{" "}
            <a href="https://am.linkedin.com/in/armen-arshakyan-6a52a02a9?trk=people-guest_people_search-card">
              Armen Arshakyan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
