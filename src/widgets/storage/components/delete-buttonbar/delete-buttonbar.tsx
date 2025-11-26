import * as styles from './delete-buttonbar.css';

interface DeleteButtonBarProps {
  onClick: () => void;
}

const DeleteButtonBar = ({ onClick }: DeleteButtonBarProps) => {
  return (
    <div className={styles.deleteBtnContainer}>
      <button className={styles.deleteBtn} onClick={onClick}>
        전체 삭제
      </button>
    </div>
  );
};

export default DeleteButtonBar;
