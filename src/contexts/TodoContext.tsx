import React, { createContext, useState } from "react";
import {
  Todo,
  TodoContextProviderProps,
  TodoContextType,
} from "../types/types";
export const TodoContext = createContext<TodoContextType | null>(null);

function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const value = { todoList, setTodoList };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;
