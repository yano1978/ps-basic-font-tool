import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import '@/assets/fonts/Roboto-Thin.ttf';
import '@/assets/fonts/Roboto-Bold.ttf';
import '@/assets/fonts/Roboto-Regular.ttf';

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
