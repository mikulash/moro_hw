import { Task } from "@/api/generated";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  fetchCompletedTasks,
  fetchTasks,
  setTaskCompleted,
  setTaskIncomplete,
  updateTaskText,
} from "./tasksThunks.ts";

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
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTasks actions
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchCompletedTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompletedTasks.fulfilled,
        (state, action: PayloadAction<Task[]>) => {
          state.loading = false;
          state.tasks = action.payload;
        },
      )
      .addCase(fetchCompletedTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // addTask actions
      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      })

      // updateTask actions
      .addCase(
        updateTaskText.fulfilled,
        (state, action: PayloadAction<Task>) => {
          const index = state.tasks.findIndex(
            (task) => task.id === action.payload.id,
          );
          if (index !== -1) {
            state.tasks[index] = action.payload;
          }
        },
      )
      .addCase(
        setTaskCompleted.fulfilled,
        (state, action: PayloadAction<Task>) => {
          const index = state.tasks.findIndex(
            (task) => task.id === action.payload.id,
          );
          if (index !== -1) {
            state.tasks[index] = action.payload;
          }
        },
      )
      .addCase(
        setTaskIncomplete.fulfilled,
        (state, action: PayloadAction<Task>) => {
          const index = state.tasks.findIndex(
            (task) => task.id === action.payload.id,
          );
          if (index !== -1) {
            state.tasks[index] = action.payload;
          }
        },
      )
      // deleteTask actions
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
