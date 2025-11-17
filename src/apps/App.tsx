import ThemeProvider from "../shared/styles/theme-provider";
import * as styles from "./app.css";

function App() {
  return (
    <ThemeProvider>
      <p className={styles.text}>스타일링을 위한 최상위 컨테이너입니다.</p>
    </ThemeProvider>
  );
}

export default App;
