import React from 'react';
import { useQuery } from 'react-query';

import { Row } from '../../shared/components';
import { TaskCard } from '../../entities/task/components/task-card/TaskCard';
import { getTaskList } from '../../entities/task/api/task';

const TaskListPage: React.FC = () => {
  const { isLoading, data } = useQuery('tasksList', getTaskList)

  if (isLoading) {
    return <div>Loading...</div>; // todo spinner
  }

  const tasksCards = data?.map(task => <TaskCard data={task} />);

  return (
    <div>
      <Row>
        {tasksCards}
      </Row>
    </div>
  );
};

export default TaskListPage;
