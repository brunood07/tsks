import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/Close.svg";
import { useTodo } from "../../hooks/useTodo";
import { useTodoModal } from "../../hooks/useTodoModal";

import styles from "./styles.module.scss";

export function UpdateTodoModal() {
  const { updateTodo, editingTodo } = useTodo();
  const { isUpdateTodoModalOpen, handleCloseModal } = useTodoModal();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(editingTodo.title);
    setDescription(editingTodo.description);
  }, [editingTodo]);

  function onRequestClose() {
    handleCloseModal("updateTodo");
  }

  async function handleUpdateTodo(event: FormEvent) {
    event.preventDefault();

    await updateTodo(editingTodo.id, {
      title,
      description,
    });

    setTitle("");
    setDescription("");
    onRequestClose();
  }
  
  return (
    <Modal
      isOpen={isUpdateTodoModalOpen}
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
        onSubmit={handleUpdateTodo}
      >
        <h2>Updated</h2>
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