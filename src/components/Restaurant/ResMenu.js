import React, { useEffect, useState } from "react";
import style from "./res-menu-.module.css";
import { RES_MENU_API } from "../../utils/constants.js";
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
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_MENU_API + resId);
    console.log(RES_MENU_API + resId);
    const data = await response.json();
    console.log(data.data.cards[0].card.card.info);
    //   console.log(data[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    //   console.log(data[0]?.card?.card?.info)
    setResInfo(data.data);

    // }
    // const { lastMileTravelString, deliveryTime, costForTwoMessage } =
    //   data[0]?.card?.card?.info?.sla;
    // const { itemCards} = data[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  };
  if (resInfo == null) return <div>Loading...</div>;

  const { name, cuisines, areaName, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className={style["menu-page"]}>
      <div className={style["menu-container"]}>
        <div className={style["about-restaurant"]}>
          <div>
            <h3>{name}</h3>
            <p className={style["small"]}>{cuisines}</p>
            <p className={style["small"]}>city,mile</p>

            <div className={style["small"]}>
              <span>
                <MdOutlineDirectionsBike
                  className={style["mile-icon"]}
                  size={23}
                />
                kilometer
              </span>{" "}
              <span>discounted </span>
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
            <h4>19 mins</h4>
          </div>
          <div className={style["delivery-time"]}>
            <HiOutlineCurrencyRupee size={25} className={style["icon"]} />{" "}
            <h4>{costForTwoMessage}</h4>
          </div>
        </div>
        <div className={style["offers-container"]}>
          <div className={style["offers"]}>
            <h5>
              <BiSolidOffer size={23} />
              Offer
            </h5>
            <p>Use code SUPERSAVER</p>
          </div>
          <div className={style["offers"]}>
            <h5>Offer</h5>
            <p>Use code SUPERSAVER</p>
          </div>
          <div className={style["offers"]}>
            <h5>Offer</h5>
            <p className={style["offers-text"]}>Use code SUPERSAVER</p>
          </div>
          <div className={style["offers"]}>
            <h5>Offer</h5>
            <p>Use code SUPERSAVER</p>
          </div>
          <div className={style["offers"]}>
            <h5>Offer</h5>
            <p>Use code SUPERSAVER</p>
          </div>
          <div className={style["offers"]}>
            <h5>Offer</h5>
            <p>Use code SUPERSAVER</p>
          </div>
        </div>
        <div></div>
        <div className={style["menu"]}>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Recommonded</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={style["dish-container"]}>
                  <div>
                    <div className={style["non-veg"]}>
                      <GoTriangleUp fill="red" />
                    </div>
                    <div className={style["veg"]}>
                      <BsCircleFill fill="green" />
                    </div>
                    <h4 className={style["dish"]}>Dish Name</h4>
                    <h5 className={style["price"]}>Rs 90</h5>
                    <p className={style["detail"]}>Detailes in diveckfekkk</p>
                  </div>

                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                      alt="dish"
                      width={150}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className={style["license"]}></div>
      </div>
    </div>
  );
};

export default ResMenu;
