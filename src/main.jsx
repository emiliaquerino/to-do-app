import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { ToDoProvider } from './contexts/TodoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ToDoProvider>
      <App />
    </ToDoProvider>
);
