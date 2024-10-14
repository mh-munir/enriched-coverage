import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

import HomePageSlice from "./homePageSlice";

export const store = configureStore({
  reducer: {
    home: HomePageSlice,
  },
});

export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
export const useAppStore = useStore.withTypes();
