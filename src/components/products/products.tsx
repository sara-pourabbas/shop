import { observer } from "mobx-react-lite";
import { store } from "@store";
import { Card } from "@components/card";
import priceTag from "@assets/images/price-tag.svg";
import plus from "@assets/images/plus.svg";
import min from "@assets/images/min.svg";
import "./products.scss";

export const Products = observer(() => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      {store.data?.products.map((item) => {
        return (
          <div className="col" key={item.id}>
            <Card customStyle="border-radius-5 product">
              <img src={item.image} alt={`product ${item.id}`} />
              <div className="product__name px-4 mt-3 ">{item.name}</div>
              <div className="d-flex my-3">
                <span className="gray-light font-size-14">$</span>
                <span className="price-color roboto-font mx-1">
                  {item.price}
                </span>
                <img src={priceTag} alt="price tag " className="mt-2" />
              </div>
              <div className="product__compute ">
                <div
                  className="product__compute-increment"
                  onClick={() => store.addProduct(item)}
                >
                  <img src={plus} alt="plus" />
                </div>
                <div className="product__compute-count ">
                  {store.countProductInBasket(item.id)}
                </div>
                <div
                  className="product__compute-decrement "
                  onClick={() => {
                    store.removeProduct(item.id);
                  }}
                >
                  <img src={min} alt="min" />
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
});
