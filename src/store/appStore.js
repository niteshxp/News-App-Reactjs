import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gridSlice from "./gridSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userSlice,
            grid: gridSlice,
        },
    }
)

export default appStore;