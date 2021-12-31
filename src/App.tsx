import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NewTodoModal } from "./components/NewTodoModal";
import { TodoProvider } from "./hooks/useTodo";

import "./styles/global.scss";

function App() {
  const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);

  function handleOpenNewTodoModal() {
    setIsNewTodoModalOpen(true);
  }

  function handleClosenNewTodoModal() {
    setIsNewTodoModalOpen(false);
  }

  return (
    <TodoProvider>
      <Header onOpenNewTodoModal={handleOpenNewTodoModal} />
      <Dashboard />
      <NewTodoModal isOpen={isNewTodoModalOpen} onRequestClose={handleClosenNewTodoModal} />
      <Footer />
    </ TodoProvider>
  );
}

export default App;
