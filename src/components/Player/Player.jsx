import { useState } from "react";
import "./Player.scss";
import mainStore from "MainStore";

export const Player = () => {
  const [playerName, setPlayerName] = useState( `Жертва ${mainStore.playersStore.players.length}`);
  function inputHandler(e) { setPlayerName(e.target.value) }

  return (
    <div className="player">
      <div className="player__visible-part">
        <input
          type="text"
          className="player__name"
          value={playerName}
          onInput={inputHandler}
        />
        {Array(10)
          .fill()
          .map((_, key) => (
            <div key={key} className="player__place-image"></div>
          ))}
      </div>
    </div>
  );
};
