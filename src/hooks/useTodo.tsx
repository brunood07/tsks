import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Todo {
  id: number;
  title: string;
  description: string;
  isDone: boolean
  created_at: string
}

interface TodoInput {
  title: string;
  description: string;
}

interface TodoProviderProps {
  children: ReactNode;
}

interface TodoContextData {
  todos: Todo[];
  createTodo: (Todo: TodoInput) => Promise<void>;
}

const TodoContext = createContext<TodoContextData>(
  {} as TodoContextData
);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    api.get("/todos")
      .then(response => setTodos(response.data));
  }, []);

  async function createTodo(todoInput: TodoInput) {
    const response = await api.post("/todos", {
      ...todoInput,
      created_at: new Date()
    });

    const { todo } = response.data;

    setTodos([
      ...todos,
      todo
    ]);
  }

  return (
    <TodoContext.Provider value={{ todos, createTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  return context;
}
