import {Configuration, TasksApi} from "./api";

const apiConfig = new Configuration({
    basePath: 'http://localhost:8080', // Set base URL to your backend
});

const tasksApi = new TasksApi(apiConfig);

export {tasksApi};