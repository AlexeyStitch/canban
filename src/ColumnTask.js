import React from 'react';
import TaskCard from "./TaskCard";



function ColumnTask(props) {


  return (
    <div>
      {props.tasks.filter(el => el.status === props.status).map(el => <TaskCard task={el}/>)}

    </div>
  );
}

export default ColumnTask;