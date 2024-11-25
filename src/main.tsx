import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import GlobalStyles from './styles/Globalstyles.Style.ts';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
);
