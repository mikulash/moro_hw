import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { TaskList } from "@/components/TaskList.tsx";

function App() {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
}

export default App;
