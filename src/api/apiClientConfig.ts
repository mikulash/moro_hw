import { Configuration, TasksApi } from "./generated";

const apiConfig = new Configuration({
  basePath: "http://localhost:8080",
});

const tasksApi = new TasksApi(apiConfig);

export { tasksApi };
