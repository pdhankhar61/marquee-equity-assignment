import React, { useRef } from "react";
import useAuthHook from "../hooks/useAuthHook";
import TodoList from "../components/TodoList";
import { Todo } from "../types/types";
import useTodoHook from "../hooks/useTodoHook";

function DashboardPage() {
  const { todoList, setTodoList } = useTodoHook();
  const { setUserAuth } = useAuthHook();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    const inputRefCurrent = inputRef.current;
    if (inputRefCurrent === null) return;
    if (inputRefCurrent.value.trim() === "") {
      inputRefCurrent.value = "";
      return;
    }

    let todoTemp: Todo = {
      id: crypto.randomUUID(),
      task: inputRefCurrent.value,
      flag: false,
      subtask: [],
    };

    setTodoList((prev: Todo[]) => {
      const todoListTemp = prev.concat(todoTemp);
      return todoListTemp;
    });
    inputRefCurrent.value = "";
  };

  const handleLogout = () => {
    setUserAuth(null);
  };

  return (
    <div className="min-h-screen pb-4">
      {/* navbar */}
      <nav className="bg-white px-2 md:px-4 py-4 sticky top-0 z-10 w-full border-b border-gray-100 shadow-md">
        <div className="container mx-auto flex justify-between">
          <h1>Dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      {/* heading */}
      <div className="container mx-auto py-16">
        <p className="text-hmd sm:text-hxl text-gray-900 font-semibold text-center">
          My Todos
        </p>
        <p className="text-tlg sm:text-txl text-gray-600 text-center">
          A list of your tasks.
        </p>
      </div>
      {/* input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
      >
        <div className="container mx-auto flex justify-between items-center w-full px-2">
          <input
            ref={inputRef}
            required
            type="text"
            placeholder="Add new task"
            name="todo"
            id="todo"
            className="placeholder:text-gray-400 px-3.5 py-4 mr-2 border border-gray-300 shadow-sm rounded-lg text-md text-gray-500 outline-none focus:border-primary-300 focus:ring focus:ring-primary-100 w-full"
          />
          <button className="bg-primary-600 hover:bg-primary-900 text-white rounded-lg py-4 px-4 text-tlg font-semibold">
            Add
          </button>
        </div>
      </form>
      {/* list of todos */}
      <div className="container mx-auto mt-10 px-2">
        {todoList && todoList.length > 0 ? (
          <TodoList todoList={todoList} />
        ) : null}
      </div>
    </div>
  );
}

export default DashboardPage;
