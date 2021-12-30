import Modal from "react-modal";

import styles from "./styles.module.scss";
import closeImg from "../../assets/Close.svg";

interface NewTodoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTodoModal({ isOpen, onRequestClose }: NewTodoModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <div 
        className={styles.container}
      >
        <h2>New Task</h2>
        <input 
          placeholder="Title"
        />

        <textarea
          placeholder="Description"
        >
        </textarea>
        <button type="submit">
          Save
        </button>
      </div>
    </Modal>
  );
}