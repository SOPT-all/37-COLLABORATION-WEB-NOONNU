import * as styles from './delete-button.css';

interface DeleteFloatingButtonProps {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: DeleteFloatingButtonProps) => {
  return (
    <button onClick={onClick} className={styles.buttonContainer}>
      <p className={styles.buttonText}>전체 삭제</p>
    </button>
  );
};

export default DeleteButton;
