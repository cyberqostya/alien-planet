import "./App.scss";
import { AddButton } from "components/AddButton/AddButton";
import MainStore from "MainStore";
import { Players } from "components/Players/Players";
import { observer } from "mobx-react";

export const App = observer(() => {
  return (
    <>
      {MainStore.playersStore.players.length > 0 && <Players />}

      <AddButton
        style={ MainStore.playersStore.players.length > 0 ? {} : { marginTop: "auto" } }
        onClick={MainStore.playersStore.addPlayer}
      />
    </>
  );
});
