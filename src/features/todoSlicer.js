import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      item: "toDo#1",
      id: 1,
    },
    {
      item: "toDo#2",
      id: 2,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const selectedTodos = (state) => state.todos.items;

export const { addTodo } = todoSlice.actions;
