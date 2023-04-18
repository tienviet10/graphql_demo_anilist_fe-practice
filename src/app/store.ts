import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import homePageSlice from "./pages/HomePage/homePageSlice";
// import { jobApi } from "./services/job-api";
// import { authApi } from "./services/auth-api";
// import jobReducer from "../features/jobSlice";
// import filterReducer from "../features/filterSlice";

const rootReducer = combineReducers({
  homePage: homePageSlice,
  // job: jobReducer,
  // filter: filterReducer,
  // [jobApi.reducerPath]: jobApi.reducer,
  // [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(jobApi.middleware, authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

setupListeners(store.dispatch);