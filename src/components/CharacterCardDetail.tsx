import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "../data/characters.json";
import { CharactersCardType } from "../types";

export const CharacterCardDetail = () => {
  const [card, setCard] = useState<CharactersCardType>();
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    setCard(Data.filter((card) => card.id === Number(params.id))[0]);
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
          <img src={card.image} className="card-image" />
          <div className="card-wrapper_parametrs">
            <span className="card-wrapper_parametrs__name">Пол:</span>
            <span className="card-wrapper_parametrs__value">{card.gender}</span>
          </div>
          <div className="card-wrapper_parametrs">
            <span className="card-wrapper_parametrs__name">Вид:</span>
            <span className="card-wrapper_parametrs__value">
              {card.species}
            </span>
          </div>
          <div className="card-wrapper_parametrs">
            <span className="card-wrapper_parametrs__name">Статус:</span>
            <span className="card-wrapper_parametrs__value">{card.status}</span>
          </div>
        </div>
      )}
    </div>
  );
};
