import React, { Component } from "react";
import { toast } from "react-toastify";
import { v1 as uuid } from "uuid";
import { EFormAction } from "../../constants/form-action.constant";
import { ESpending } from "../../constants/spending.constant";
import { isNumeric } from "../../utils/is-number";

import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    var spending = props.spending;

    this.state = {
      id: spending ? spending.id : uuid(),
      title: spending ? spending.title : "",
      amount: spending ? spending.amount : "",
      description: spending ? spending.description : "",
      dueDate: spending ? spending.dueDate : date.toISOString().split("T")[0],
      type: spending ? spending.type : ESpending.SPEND,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (
      !this.state.amount ||
      !isNumeric(this.state.amount) ||
      parseInt(this.state.amount) <= 0
    ) {
      toast.error("Amount is required");
      return;
    }

    if (this.state.dueDate > new Date().toISOString().split("T")[0]) {
      toast.error("Due date cannot be in the future");
      return;
    }

    const newSpending = {
      id: this.state.id,
      title: this.state.title,
      amount: this.state.amount,
      description: this.state.description,
      dueDate: this.state.dueDate,
      type: this.state.type,
    };

    this.props.action(newSpending);

    // if action is store reset form
    if (this.props.actionName === EFormAction.STORE) {
      this.setState({
        id: uuid(),
        title: "",
        amount: "",
        description: "",
        dueDate: new Date().toISOString().split("T")[0],
        type: ESpending.SPEND,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type={"text"}
            className="form-control"
            name={"title"}
            value={this.state.title}
            placeholder="What are you spend for? (or receive from)"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">How much ?</label>
          <input
            type={"text"}
            className="form-control"
            name={"amount"}
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            type={"text-aria"}
            className="form-control"
            name={"description"}
            value={this.state.description}
            placeholder="Add more description"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Due Date</label>
          <input
            type={"date"}
            className="form-control"
            name={"dueDate"}
            value={this.state.dueDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Type</label>
          <select
            className="form-control"
            name={"type"}
            value={this.state.type}
            onChange={this.handleChange}
          >
            <option value={ESpending.SPEND}>Spend</option>
            <option value={ESpending.RECEIVE}>Receive</option>
          </select>
        </div>

        <button className="btn btn-primary mt-3 w-100">
          {this.props.actionName}
        </button>
      </form>
    );
  }
}

export default Form;
