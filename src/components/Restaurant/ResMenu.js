import  style from "./res-menu-.module.css";
import { useParams } from "react-router-dom";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { GoTriangleUp } from "react-icons/go";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CDN_URL } from "../../utils/constants.js";
import { FSSAI_IMG } from "../../utils/constants.js";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <div>Loading...</div>;
  console.log(resInfo);
  const { name, cuisines, areaName, avgRating, costForTwoMessage, city } =
    resInfo?.cards[0]?.card?.card?.info;
  const { deliveryTime, lastMileTravelString, slaString } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const { cards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR;

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
        <div className={style["menu"]}>
          {cards.slice(1, cards.length - 2).map((card, index) => (
            <div key={index} className={style["accordion"]}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 className={style["category"]}>{card.card.card.title}</h4>
                </AccordionSummary>
                <AccordionDetails>
                  {card.card.card.itemCards
                    ? card.card.card.itemCards.map((item, index) => (
                        <div className={style["dish-container"]} key={index}>
                          <div>
                            {item.card.info.isVeg === 1 ? (
                              <div className={style["veg"]}>
                                <BsCircleFill fill="green" size={10} />
                              </div>
                            ) : (
                              <div className={style["non-veg"]}>
                                <GoTriangleUp fill="red" />
                              </div>
                            )}
                            <h4 className={style["dish"]}>
                              {item.card.info.name}
                            </h4>
                            <h5 className={style["price"]}>
                              ₹
                              {item.card.info.defaultPrice / 100 ||
                                item.card.info.price / 100}
                            </h5>
                            <p className={style["detail"]}>
                              {item.card.info.description}
                            </p>
                          </div>

                          <div>
                            {item.card.info.imageId ? (
                              <img
                                src={CDN_URL + item.card.info.imageId}
                                alt="dish"
                                className={style["dish-image"]}
                                width={110}
                              />
                            ) : (
                              ""
                            )}
                            <div className={style["button-container"]}>
                              {" "}
                              <button
                                className={
                                  item.card.info.imageId
                                    ? style["add-button"]
                                    : style["add-btn"]
                                }
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </AccordionDetails>
              </Accordion>
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
