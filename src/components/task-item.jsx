import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import check from '../assets/icon-check.svg';
import cross from '../assets/icon-cross.svg';

const TaskItem = ({ todo }) => {
  const { toggleIsDone, deleteTodo } = useContext(TodoContext);
  const { id, task, isDone } = todo;

  return (
    <div class="todo-container" key={id}>
      <div class="checkbox">
      <div className={`circle ${isDone ? 'done' : ''}`} onClick={() => toggleIsDone(id)}></div>
        <div className={`check ${isDone ? 'done' : ''}`} onClick={() => toggleIsDone(id)}>
          <img src={check} />
        </div>
      </div>
      <p className={`todo-text ${isDone ? 'done' : ''}`}>{task}</p>
      <div class="todo-delete">
        <img class="check-image" src={cross} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};

export default TaskItem;
