import { useDispatch } from "react-redux";
import "./App.css";
import { SquareList } from "./components/SquareList/SquareList";
import { Button, ButtonTheme } from "./shared/ui/Button/Button";
import { addSquare, removeSquare } from "./store/squaresSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="btnWrapper">
        <Button
          onClick={() => dispatch(addSquare())}
          theme={ButtonTheme.ADD_BUTTON}
          text="Добавить"
        />
        <Button
          onClick={() => dispatch(removeSquare())}
          theme={ButtonTheme.DELETE_BUTTON}
          text="Удалить"
        />
      </div>
      <SquareList />
    </div>
  );
}

export default App;
