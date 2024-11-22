import { AppRoutes } from './routes'
import { ThemeProvider } from './contexts/theme-contexts'

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;