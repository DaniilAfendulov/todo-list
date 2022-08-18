import './App.css';
import TaskEdit from './components/TaskEdit';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TaskList/>
      <TaskEdit/>
    </div>
  );
}

export default App;
