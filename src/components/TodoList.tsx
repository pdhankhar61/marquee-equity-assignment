import React, { Key, useRef } from "react";
import { TodoListPropsType } from "../types/types";
import { down } from "../assets/icons/Icons";
import useTodoHook from "../hooks/useTodoHook";

function TodoList(props: TodoListPropsType) {
  const { todoList, setTodoList } = useTodoHook();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFlag = (id: String) => {
    const todoListTemp = todoList?.map((item) => {
      if (item.id === id) {
        item.flag = !item.flag;
      }
      return item;
    });
    setTodoList(todoListTemp);
  };

  const handleAddSubTask = (id: String) => {
    const inputRefCurrent = inputRef.current;
    if (inputRefCurrent === null) return;
    if (inputRefCurrent.value.trim() === "") {
      inputRefCurrent.value = "";
      return;
    }

    const todoListTemp = todoList?.map((item) => {
      if (item.id === id) {
        item.subtask = item.subtask.concat({
          id: crypto.randomUUID(),
          task: inputRefCurrent.value,
        });
      }
      return item;
    });
    setTodoList(todoListTemp);
    inputRefCurrent.value = "";
  };

  return (
    <ul className="flex flex-col space-y-5">
      {props.todoList
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <li key={item.id as Key}>
              <div className="flex justify-between py-4 px-4 shadow-lg rounded-md rounded-b-none border-gray-400 border">
                <p>{item.task}</p>
                <button
                  onClick={() => {
                    handleFlag(item.id);
                  }}
                >
                  <i className="block hover:bg-gray-200 rounded-full">{down}</i>
                </button>
              </div>
              {item.flag
                ? item.subtask.map((subtask) => {
                    return (
                      <div
                        key={subtask.id as Key}
                        className="text-gray-600 px-4"
                      >
                        {subtask.task}
                      </div>
                    );
                  })
                : null}
              {item.flag ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAddSubTask(item.id);
                  }}
                >
                  <div className="flex justify-between items-center w-full mt-2">
                    <input
                      required
                      type="text"
                      ref={inputRef}
                      placeholder="Add new subtask"
                      name="subtodo"
                      id="subtodo"
                      className="placeholder:text-gray-400 px-3.5 py-1 mr-2 border border-gray-300 shadow-sm rounded-lg text-md text-gray-500 outline-none focus:border-primary-300 focus:ring focus:ring-primary-100 w-full"
                    />
                    <button className="bg-primary-600 hover:bg-primary-900 text-white rounded-lg py-1 px-2 text-tlg font-semibold">
                      Add
                    </button>
                  </div>
                </form>
              ) : null}
            </li>
          );
        })}
    </ul>
  );
}

export default TodoList;
