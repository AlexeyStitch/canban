import React, {useState} from 'react';

function App() {
    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] =  useState(false)
    const [isButtonTaskCreate, setIsButtonTaskCreate] = useState(false)

    const isOpenForm = () => {
        setIsOpenCreateTaskForm(true)
    }

    const onTaskChange = (e) => {
        if(e.target.value.length > 3) {
       setIsButtonTaskCreate(true)
        }
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
                        <input type="text" className="form-control" onChange={onTaskChange}/>
                    </div>


                    <button type="submit" className="btn btn-primary" disabled={!isButtonTaskCreate}>Submit</button>
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


    </div>
  );
}

export default App;
