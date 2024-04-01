import "./Header.scss";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="Big">
      <div className="div-menu">
        <div className="div-one">
          <div className="new-11">
          <ul className="ul-nike">
            <img
              src="https://www.svgrepo.com/show/303214/nike-4-logo.svg"
              alt=""
              className="nikelogo"
            />
            <NavLink to="/home">
              <li className="li1">Home</li>
              <div className="gic"></div>
            </NavLink>
            <NavLink to="/product">
              <li className="li1">Product</li>
              <div className="gic"></div>
            </NavLink>
            <NavLink to="/basket">
              <li className="li1">Basket</li>
              <div className="gic"></div>
            </NavLink>
            <NavLink to="/about">
              <li className="li1">About</li>
              <div className="gic"></div>
            </NavLink>
          </ul>
        </div>
        </div>

        <div className="div-tree">
         <a href="https://www.instagram.com/nike/">
          <i class="fa fa-instagram" aria-hidden="true" id="newicn" style={{ fontSize: 30, margin: 20 }}></i>
          </a>
         <a href="https://www.snapchat.com/add/nike">
          <i class="fa fa-snapchat" aria-hidden="true" id="newicn" style={{ fontSize: 30, margin: 20 }}></i>
          </a>
         <a href="https://www.facebook.com/nike/?locale=ru_RU">
          <i class="fa fa-facebook" aria-hidden="true" id="newicn" style={{ fontSize: 30, margin: 20 }}></i>
          </a>
         <a href="https://www.pinterest.com/nike/">
          <i class="fa fa-pinterest" aria-hidden="true" id="newicn" style={{ fontSize: 30, margin: 20 }}></i>
          </a>
        </div>
      </div>

      <div className="divbg"></div>
    </div>
  );
}
export default Header;
