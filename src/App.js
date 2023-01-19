import RootRouter from "./routes";
import "./reset.css";
import { createStore } from "redux";
import RootReducer from "./store";
import { Provider } from "react-redux";

const store = createStore(RootReducer);

function App() {
    return (
        <Provider store={store}>
            <RootRouter />
        </Provider>
    );
}

export default App;
