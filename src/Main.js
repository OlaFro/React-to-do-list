import React from "react";
import AddTask from "./AddTask";

class Main extends React.Component {
  state = {
    task: [],
  };

  submitTask = (taskObject) => {
    this.setState({
      task: [...this.state.task, taskObject],
    });
  };

  render() {
    return (
      <div className="mx-auto flex-column col-8 border bg-light my-5 align-items-center d-flex">
        <h1 className="display-5 text-center my-3">My to-do app</h1>
        <AddTask submit={this.submitTask} />
      </div>
    );
  }
}

export default Main;
