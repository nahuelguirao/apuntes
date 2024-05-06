import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* ENVOLVEMOS NUESTRA APP CON EL STORE */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
