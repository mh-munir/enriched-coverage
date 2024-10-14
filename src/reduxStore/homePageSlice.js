import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "./axiosInstance";

const HomePageSlice = createSlice({
  name: "home/allfetch",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    add: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(homeFetchItem.fulfilled, (state, action) => {
      (state.loading = false), (state.data = action.payload);
    }),
      builder.addCase(homeFetchItem.pending, (state, action) => {
        state.loading = true;
      });
  },
});
export const { add } = HomePageSlice.actions;
export default HomePageSlice.reducer;

export const homeFetchItem = createAsyncThunk("home/allfetch", async () => {
  try {
    const response = await AxiosInstance.get("list/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
