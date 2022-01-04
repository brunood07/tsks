import { createContext, ReactNode, useContext, useState } from "react";

import { NewTodoModal } from "../components/NewTodoModal";
import { UpdateTodoModal } from "../components/UpdateTodoModal";


interface TodosModalContextData {
  isNewTodoModalOpen: boolean;
  isUpdateTodoModalOpen: boolean;
  handleOpenModal: (modalType: string) => void;
  handleCloseModal: (modalType: string) => void;
}

interface TodosModalProviderProps {
  children: ReactNode;
}

type HandleModalFunctions = {
  [type: string]: () => void;
}

const TodosModalContext = createContext(
  {} as TodosModalContextData
);

export function TodosModalProvider({
  children
}: TodosModalProviderProps) {
  const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);
  const [isUpdateTodoModalOpen, setIsUpdateTodoModalOpen] = useState(false);

  function handleOpenModal(modalType: string) {
    const action: HandleModalFunctions = {
      updateTodo: () => setIsUpdateTodoModalOpen(true),
      newTodo: () => setIsNewTodoModalOpen(true)
    }

    action[modalType]()
  }

  function handleCloseModal(modalType: string) {
    const action: HandleModalFunctions = {
      updateTodo: () => setIsUpdateTodoModalOpen(false),
      newTodo: () => setIsNewTodoModalOpen(false)
    }

    action[modalType]()
  }

  const contextValue = {
    isNewTodoModalOpen,
    isUpdateTodoModalOpen,
    handleOpenModal,
    handleCloseModal
  }

  return (
    <TodosModalContext.Provider value={contextValue}>
      {children}

      <NewTodoModal />
      <UpdateTodoModal />
    </TodosModalContext.Provider>
  )
}

export function useTodoModal() {
  const context = useContext(TodosModalContext);

  return context;
}