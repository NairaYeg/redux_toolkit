import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counterSlicer";
import { todoSlice } from "../features/todoSlicer";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todoSlice.reducer,
  },
});
