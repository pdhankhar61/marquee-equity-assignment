export type loginFormType = {
  email: String;
  password: String;
};

export type AuthContextType = {
  userAuth: userAuthType | null;
  setUserAuth: any;
};

export type userAuthType = {
  email: String;
};

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

export type TodoContextProviderProps = {
  children: React.ReactNode;
};

export type AuthGuardPropsType = {
  children: React.ReactElement;
};

export type Subtask = {
  id: String;
  task: String;
};

export type Todo = {
  id: String;
  task: String;
  subtask: Array<Subtask>;
  flag: boolean;
};

export type TodoListPropsType = {
  todoList: Array<Todo>;
};

export type TodoContextType = {
  todoList: Array<Todo>;
  setTodoList: any;
};
