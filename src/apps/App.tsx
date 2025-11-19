import ThemeProvider from '../shared/styles/theme-provider';
import { rootStyle } from '../shared/styles/global.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <ThemeProvider className={rootStyle}>
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default App;
