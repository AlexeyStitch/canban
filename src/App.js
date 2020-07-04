import React, {useState} from 'react';

function App() {
    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] =  useState(false)
    const [isButtonTaskCreate, setIsButtonTaskCreate] = useState(false)
    const [taskInput, setTaskInput] = useState('')

    const isOpenForm = () => {
        setIsOpenCreateTaskForm(true)
    }

    const onTaskChange = (e) => {
       setIsButtonTaskCreate(e.target.value.length > 4)
        setTaskInput(e.target.value)
    }

    const taskSubmit = (e) => {
        console.log(taskInput)
        e.preventDefault();
      taskReset();
    }

    const taskReset = () => {
        setTaskInput('')
        setIsOpenCreateTaskForm(false)
        setIsButtonTaskCreate(false)
    }

  return (
    <div className="App">


        <div className="container">
            <h1>Kanban</h1>


            {!isOpenCreateTaskForm && <button className="btn btn-primary" onClick={isOpenForm}>Create Task</button> }

            {
                isOpenCreateTaskForm &&

                <form>
                    <div className="form-group">

                        <label htmlFor="exampleInputEmail1">Task</label>
                        <input type="text" className="form-control" onChange={onTaskChange} value={taskInput}/>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={!isButtonTaskCreate} onClick={taskSubmit}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={taskReset}>Cancel</button>
                </form>
            }


            <div className="row">
                <div className="col-sm">
                    To do
                </div>

                <div className="col-sm">
                    In Progress
                </div>

                <div className="col-sm">
                    Review
                </div>

                <div className="col-sm">
                    Done
                </div>

            </div>
        </div>

dsaddsadsadsaasdas
    </div>
  );
}

export default App;
dasdsdsa d das