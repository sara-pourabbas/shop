import "./header.scss";
import { observer } from "mobx-react-lite";
import { Card } from "@components/card";
import { store } from "@store";
import logo from "@assets/images/flashbox-logo.svg";
import starFill from "@assets/images/star-fill.svg";
import starHalf from "@assets/images/star-half.svg";
import star from "@assets/images/star.svg";
import location from "@assets/images/location.svg";

export const Header = observer(() => {
  const rate =
    store.data !== undefined && store.data && store.data?.rate_average;
  const rate_count =
    store.data !== undefined && store.data && store.data?.rate_count;
  const name = store.data !== undefined && store.data && store.data?.name;
  const address = store.data !== undefined && store.data && store.data?.address;
  const getStarImage = (starNumber: number) => {
    if (rate >= starNumber) {
      return starFill;
    }
    if (rate >= starNumber - 1) {
      return starHalf;
    }
    return star;
  };
  return (
    <header className="mb-4">
      <Card customStyle="pt-5 pb-2">
        <Card customStyle="logo-card">
          <img src={logo} alt="fleshlogo" />
        </Card>

        <h5 className="title">{name}</h5>
        <div className="gray-light font-size-14 d-flex align-items-center justify-content-between">
          <span>{rate}</span>
          <img src={getStarImage(1)} alt="starFill" className="star " />
          <img src={getStarImage(2)} alt="starFill" className="star " />
          <img src={getStarImage(3)} alt="starFill" className="star " />
          <img src={getStarImage(4)} alt="starHalf" className="star " />
          <img src={getStarImage(5)} alt="star" className="star me-1 " />
          <span>{rate_count}</span>
        </div>
        <div className="font-size-14 gray-costum">
          <span>{address}</span>
          <img src={location} alt="location" className="ms-1" />
        </div>
      </Card>
    </header>
  );
});
