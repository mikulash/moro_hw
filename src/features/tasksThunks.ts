/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { tasksApi } from "../api/apiClientConfig.ts";
import { CreateTask, UpdateTask } from "@/api/generated";

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

export const fetchCompletedTasks = createAsyncThunk(
  "tasks/fetchCompletedTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await tasksApi.tasksCompletedGet();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateTaskText = createAsyncThunk(
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

// endpoint should be at least PUT btw
export const setTaskCompleted = createAsyncThunk(
  "tasks/setTaskCompleted",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await tasksApi.tasksIdCompletePost(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const setTaskIncomplete = createAsyncThunk(
  "tasks/setTaskIncomplete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await tasksApi.tasksIdIncompletePost(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
