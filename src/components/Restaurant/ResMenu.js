import style from "./res-menu-.module.css";
import { useParams } from "react-router-dom";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { FSSAI_IMG } from "../../utils/constants.js";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) return <div>Loading...</div>;
  console.log(resInfo);
  const { name, cuisines, areaName, avgRating, costForTwoMessage, city } =
    resInfo?.cards[0]?.card?.card?.info;
  const { deliveryTime, lastMileTravelString, slaString } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const cardsArray =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = cardsArray.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);

  return (
    <div className={style["menu-page"]}>
      <div className={style["menu-container"]}>
        <div className={style["about-restaurant"]}>
          <div>
            <h3>{name}</h3>
            <p className={style["small"]}>{cuisines.join(", ")}</p>
            <p className={style["small"]}>{areaName}</p>

            <div className={style["distance"]}>
              <span>
                <MdOutlineDirectionsBike
                  className={style["mile-icon"]}
                  size={20}
                />
              </span>
              <span>{lastMileTravelString}</span>
            </div>
          </div>

          <div>
            <div className={style["rating"]}>
              <AiFillStar className={style["rating-icon"]} />
              {avgRating}
            </div>
          </div>
        </div>
        <div className={style["hr"]}></div>
        <div className={style["price-del"]}>
          <div className={style["delivery-time"]}>
            <MdAccessTimeFilled size={25} className={style["icon"]} />
            <h4>{slaString}</h4>
          </div>
          <div className={style["delivery-time"]}>
            <HiOutlineCurrencyRupee size={25} className={style["icon"]} />
            <h4>{costForTwoMessage}</h4>
          </div>
        </div>
        <div className={style["offers-container"]}>
          {offers.map((offer, index) => (
            <div key={index} className={style["offers"]}>
              <div>
                <BiSolidOffer size={23} fill="#865A4F" />
                <span className={style["header"]}>{offer?.info?.header}</span>
              </div>
              <p className={style["coupon"]}>
                {offer?.info?.couponCode} | {offer?.info?.description}
              </p>
            </div>
          ))}
        </div>
        <div></div>

        {/* catagories */}
        <div className={style["menu"]}>
          {categories.map((card, index) => (
            <div key={index} className={style["accordion"]}>
              <RestaurantCategory
                data={card?.card?.card}
                showItem={index === showIndex}
                setShowIndex={() =>
                  setShowIndex(index === showIndex ? null : index)
                }
              />
            </div>
          ))}
        </div>

        <div className={style["license-footer"]}>
          <div className={style["license"]}>
            <div>
              <img src={FSSAI_IMG} alt="fssai" width={50} />
            </div>
            <p>liceness no</p>
          </div>
          <div className={style["hotel-detail"]}>
            <h3>{name}</h3>
            <h5>outlet: {areaName}</h5>

            <p>
              {name}, {areaName} , {city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
