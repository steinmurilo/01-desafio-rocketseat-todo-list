import { Header } from './components/Header';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';
import './global.css';

export function App() {

  return (
    <div className="App">
      <Header />
      
      <ToDoList />
    </div>
  )
}
