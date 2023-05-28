import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function useTodoHook() {
  const value = useContext(TodoContext);
  return { ...value };
}

export default useTodoHook;
