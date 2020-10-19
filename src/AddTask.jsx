import React from "react";

class AddTask extends React.Component {
  state = {
    currTask: {
      task: "",
      deadline: "",
    },
    tasksArr: [],
  };

  getTask = (e) => {
    e.preventDefault();
    this.setState({
      currTask: { ...this.state.currTask, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <div className="flex-column col-6 border bg-warning my-4 d-flex d-flex align-items-center">
        <p className="my-2">Add new task:</p>
        <div className="input-group input-group-sm my-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Task
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            name="task"
            onChange={this.getTask}
          />
        </div>

        <div className="input-group input-group-sm my-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Deadline
            </span>
          </div>
          <input
            type="date"
            className="form-control"
            name="deadline"
            onChange={this.getTask}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary btn-sm my-2 d-flex"
          onClick={() => {
            this.props.submit(this.state.currTask);
          }}
        >
          Add task
        </button>
      </div>
    );
  }
}

export default AddTask;
