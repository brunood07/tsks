import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/Close.svg";
import { useTodo } from "../../hooks/useTodo";
import { useTodoModal } from "../../hooks/useTodoModal";

import styles from "./styles.module.scss";

export function NewTodoModal() {
  const { createTodo } = useTodo();
  const { isNewTodoModalOpen, handleCloseModal } = useTodoModal()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onRequestClose() {
    handleCloseModal("newTodo");
  }

  async function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    await createTodo({
      title,
      description,
    });

    setTitle("");
    setDescription("");
    onRequestClose();
  }
  
  return (
    <Modal
      isOpen={isNewTodoModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <form 
        className={styles.container}
        onSubmit={handleCreateNewTodo}
      >
        <h2>New Task</h2>
        <input 
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        >
        </textarea>
        <button type="submit">
          Save
        </button>
      </form>
    </Modal>
  );
}