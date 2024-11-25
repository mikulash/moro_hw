import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { TaskList } from "@/components/TaskList.tsx";
import { NewTaskInput } from "@/components/NewTaskInput.tsx";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full">
        <NewTaskInput />
        <div className="rounded-md border">
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
