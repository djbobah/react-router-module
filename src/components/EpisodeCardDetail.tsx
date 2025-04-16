import { useNavigate, useParams } from "react-router-dom";

import { EpisodeCardType } from "../types";
import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";

export const EpisodeCardDetail = () => {
  const { episodes } = useData();
  const [card, setCard] = useState<EpisodeCardType>();
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    episodes &&
      setCard(episodes.filter((card) => card.id === Number(params.id))[0]);
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
            <span className="card-wrapper_parametrs__name">"Эпизод":</span>
            <span className="card-wrapper_parametrs__value">
              {card.episode}
            </span>
          </div>
          <div className="card-wrapper_parametrs">
            <span className="card-wrapper_parametrs__name">
              Дата выхода в эфир:
            </span>
            <span className="card-wrapper_parametrs__value">
              {card.air_date}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
