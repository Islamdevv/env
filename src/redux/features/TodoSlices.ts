import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
  todo: Todo[];
}

const API = import.meta.env.VITE_API;

const initialState: initialStateType = {
  todo: [],
};

export const getReq = createAsyncThunk("API/get", async () => {
  try {
    let response = await axios(API);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postReq = createAsyncThunk("API/post", async (newData: Todo) => {
  try {
    let response = await axios.post(API, newData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteReq = createAsyncThunk(
  "API/delete",
  async (_id: TODO.deleteReq) => {
    try {
      let response = await axios.delete(`${API}/${_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editReq = createAsyncThunk(
  "API/edit",
  async ({ _id, newData }: TODO.EditReq) => {
    try {
      let response = await axios.put(`${API}/${_id}`, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const TodoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReq.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(postReq.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(deleteReq.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(editReq.fulfilled, (state, action) => {
        state.todo = action.payload;
      });
  },
});

export const {} = TodoSlices.actions;
export default TodoSlices.reducer;
