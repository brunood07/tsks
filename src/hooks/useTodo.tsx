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
  editingTodo: Todo;
  updateTodo: (id: number, updatedTodo: TodoInput) => Promise<void>;
  setCurrentEditingTodo: (id: number) => void;
  deleteTodo: (id: number) => Promise<void>;
}

const TodoContext = createContext<TodoContextData>(
  {} as TodoContextData
);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo>({} as Todo);

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

  async function updateTodo(id: number, updatedTodo: TodoInput) {
    await api.put<Todo>(`/todos/${id}`, updatedTodo);

    const updatedTodos = todos.map(todo => {
      return todo.id === id
      ? { ...todo, ...updatedTodo }
      : todo
    });

    setTodos(updatedTodos);
  }

  function setCurrentEditingTodo(id: number) {
    const editingTodo = todos.find(todo => todo.id === id) ?? ({} as Todo);

    setEditingTodo(editingTodo);
  }

  async function deleteTodo(id: number) {
    await api.delete<Todo>(`/todos/${id}`);

    const updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);
  }

  return (
    <TodoContext.Provider value={{ 
      todos, 
      createTodo, 
      updateTodo,
      editingTodo,
      setCurrentEditingTodo,
      deleteTodo 
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  return context;
}
