import ThemeProvider from "../shared/styles/theme-provider";
import * as styles from "./app.css";
import { rootStyle } from "../shared/styles/global.css";

function App() {
  return (
    <ThemeProvider className={rootStyle}>
      <p className={styles.display36b}>display-36b</p>
      <p className={styles.display20r}>display-20r</p>
      <p className={styles.header16m}>header-16m</p>
      <p className={styles.title28sb}>title-28sb</p>
      <p className={styles.body20sb}>body-20sb</p>
      <p className={styles.body18sb}>body-18sb</p>
      <p className={styles.body16sb}>body-16sb</p>
      <p className={styles.body16m}>body-16m</p>
      <p className={styles.body14m}>body-14m</p>
      <p className={styles.body14r}>body-14r</p>
    </ThemeProvider>
  );
}

export default App;
