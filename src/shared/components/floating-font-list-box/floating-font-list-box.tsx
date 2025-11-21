import * as styles from './floating-font-list-box.css';
import FontList from './components/font-list/font-list';

const FONT_DATA = [
  { id: 1, name: '프리텐다드' },
  { id: 2, name: '어그로체' },
  { id: 3, name: '조선굴림체' },
  { id: 4, name: 'Wanted Sans' },
  { id: 5, name: '나눔스퀘어' },
  { id: 6, name: '바탕체' },
];

const FloatingFontListBox = () => {
  return (
    <div className={styles.container}>
      {FONT_DATA.map((font) => (
        <div className={styles.listContainer}>
          <FontList key={font.id} fontName={font.name} onDelete={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default FloatingFontListBox;
