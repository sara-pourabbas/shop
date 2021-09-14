import { observer } from "mobx-react-lite";
import { store } from "@store";
import basket from "@assets/images/basket.svg";
import "./footer.scss";

export const Footer = observer(() => {
  return (
    <>
      <nav className=" fixed-bottom  bg-footer">
        <div className="container">
          <div className="d-flex justify-content-between flex-row-reverse py-3 align-items-center text-white">
            <div className=" d-flex align-items-center">
              <span className="orders-number ">{store.countBasket}</span>
              <img src={basket} width="38" height="34" alt="basket" />
            </div>
            <div className="font-size-22 roboto-font">Basket</div>
            <div className=" font-size-22">$ {store.getTotalPrice}</div>
          </div>
        </div>
      </nav>
    </>
  );
});
