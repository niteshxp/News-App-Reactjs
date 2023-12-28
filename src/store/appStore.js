import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gridSlice from "./gridSlice";
import savedNewsSlice from "./savedNewsSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userSlice,
            grid: gridSlice,
            saveNews: savedNewsSlice,
        },
    }
)

export default appStore;