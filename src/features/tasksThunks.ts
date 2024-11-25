/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasksApi } from "../api/apiClientConfig.ts";
import { CreateTask, UpdateTask } from "../api/generated";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await tasksApi.tasksGet();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (taskText: string, { rejectWithValue }) => {
    try {
      const createTask: CreateTask = { text: taskText };
      const response = await tasksApi.tasksPost(createTask);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, text }: { id: string; text: string }, { rejectWithValue }) => {
    try {
      const updateTask: UpdateTask = { text };
      const response = await tasksApi.tasksIdPost(id, updateTask);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string, { rejectWithValue }) => {
    try {
      await tasksApi.tasksIdDelete(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
