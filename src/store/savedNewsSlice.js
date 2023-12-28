import { createSlice } from "@reduxjs/toolkit";

const savedNewsSlice = createSlice({
    name: "saveNews",
    initialState: {
        news: [],
        showSavedNews: false,
    },
    reducers: {
        saveNews: (state, action) => {
            state.news.push(action.payload);
        },
        showSavedNews: (state) => {
            state.showSavedNews = !state.showSavedNews;
        },
        clearAll: (state) => {
            state.news = [];
        }
    }
})

export const { saveNews, showSavedNews, clearAll } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;