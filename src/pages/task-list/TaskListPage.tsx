import React from 'react';
import { Task } from '../../shared/api';
import { Row } from '../../shared/components';
import { TaskCard } from '../../entities/task/components/task-card/TaskCard';

const TaskListPage: React.FC = () => {
  // todo fetch data with react query
  const tasks: Task[] = [
    {
      id: 0,
      title: 'Test Task 0',
    },
    {
      id: 1,
      title: 'Test Task 1',
    },
  ];

  const tasksCards = tasks.map(task => <TaskCard data={task} />);

  return (
    <div>
      <Row>
        {tasksCards}
      </Row>
    </div>
  );
};

export default TaskListPage;
