import {Task} from "../api/generated";
import {createSlice} from "@reduxjs/toolkit";

interface TasksState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
}

const initialState: TasksState = {
    tasks: [],
    loading: false,
    error: null,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
});

export default tasksSlice.reducer;