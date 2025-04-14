import { useNavigate, useParams } from "react-router-dom";
import { LocationCardType } from "../types";
import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";

export const LocationCardDetail = () => {
  const { locations } = useData();
  const [card, setCard] = useState<LocationCardType>();

  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    locations &&
      setCard(locations.filter((card) => card.id === Number(params.id))[0]);
  }, []);

  return (
    <div className="wrapper">
      <button
        style={{ padding: "5px" }}
        onClick={handleClick}
      >{`<- Назад`}</button>
      {card && (
        <div className="card-wrapper">
          <h2>{card.name}</h2>
          <hr style={{ width: "95%" }} />
          <div className="card-wrapper_parametrs">
            <span className="card-wrapper_parametrs__name">Тип:</span>
            <span className="card-wrapper_parametrs__value">{card.type}</span>
          </div>
          <div className="card-wrapper_parametrs">
            <span className="card-wrapper_parametrs__name">Измерение:</span>
            <span className="card-wrapper_parametrs__value">
              {card.dimension}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
