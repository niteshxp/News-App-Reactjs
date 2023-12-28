import { createSlice } from "@reduxjs/toolkit";

const gridSlice = createSlice({
    name: "grid",
    initialState: {
        isGridView: true,
    },
    reducers: {
        updateGrid: (state) => {
            state.isGridView = !state.isGridView;
        }
    }
})

export const { updateGrid } = gridSlice.actions;
export default gridSlice.reducer;
