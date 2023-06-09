import React from "react";
import Image from "next/image";
import style from "./card.module.css";
import Rectangle from "../../../../public/svgs/Rectangle 32.svg";
const card1 = () => {
  return (
    <>
      <div className={style.Card}>
        <div className={style.Cardpic}>
          <Image src={Rectangle} alt="CardPic" width={325} height={256} />
        </div>
        <div className={style.Carddetails}>
          <div className={style.cardplace}>
            <h5>Dubai: The city of life</h5>
            <p>
              <span>Start From</span>27,500TK
            </p>
          </div>
          <div className={style.daysOfjourney}>
            <p> 4 days </p>
          </div>
        </div>
        <button className={style.Cardbutton}>View Details</button>
      </div>
    </>
  );
};

export default card1;
