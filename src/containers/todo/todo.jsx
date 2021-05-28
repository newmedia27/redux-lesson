import React, { Component } from "react";
import { connect } from "react-redux";

import { addTask, removeTask, changeTask } from "../../actions/todoAction";

import ToDoInput from "../../components/todo-input/todo-input";
import ToDoList from "../../components/todo-list/todo-list";
import Footer from "../../components/footer/footer";

import "./todo.css";

class ToDo extends Component {
  state = {
    activeFilter: "all",
    taskText: "",
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === "Enter") {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: "",
      });
    }
  };

  render() {
    console.log(this.props, "TASKS");
    const { activeFilter, taskText } = this.state;
    const { tasks, removeTask, changeTask } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const ammount = tasks.filter((item) => !item.isCompleted);

    return (
      <div className="todo-wrapper">
        <ToDoInput
          onKeyPress={this.addTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTasksExist && (
          <ToDoList
            tasksList={tasks}
            removeTask={removeTask}
            changeTask={changeTask}
          />
        )}
        {isTasksExist && (
          <Footer amount={ammount.length} activeFilter={activeFilter} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.todo,
});

const mapDispatchToProps = {
  addTask,
  removeTask,
  changeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
