import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { TodoContext } from '../contexts/TodoContext';

const TaskInput = () => {
  const { addTodoItem } = useContext(TodoContext);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    task.trim();
    if (task === '') return;

    addTodoItem({ id: id, task: task, isDone: false });
    setTask('');
  };

  const clearInput = () => {
    setTask('');
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="input">
        <div class="circle">
          <div class="clear-input" onClick={clearInput}></div>
        </div>

        <input class="todo-input"
          type="text"
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={task}
        />
      </div>
    </form>
  );
};

export default TaskInput;
