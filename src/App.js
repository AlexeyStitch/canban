import React from 'react';

function App() {
    const addTask = () => {

    }

  return (
    <div className="App">


        <div className="container">
            <h1>Kanban</h1>


            <button className="btn btn-primary">Create Task</button>

            <form>
                <div className="form-group">

                    <label htmlFor="exampleInputEmail1">Task</label>
                    <input type="text" className="form-control"/>
                    </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


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
