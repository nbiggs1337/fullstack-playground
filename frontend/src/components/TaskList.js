import Task from './Task';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  const statuses = ['To Do', 'In Progress', 'Done'];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {statuses.map(status => (
        <div
          key={status}
          style={{ width: '30%', border: '1px solid #000', padding: '10px' }}
        >
          <h2>{status}</h2>
          {tasks
            .filter(task => task.status === status)
            .map(task => (
              <Task
                key={task._id}
                task={task}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
