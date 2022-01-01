import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/Close.svg";
import { useTodo } from "../../hooks/useTodo";

import styles from "./styles.module.scss";

interface NewTodoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTodoModal({ isOpen, onRequestClose }: NewTodoModalProps) {
  const { createTodo } = useTodo();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      isOpen={isOpen}
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