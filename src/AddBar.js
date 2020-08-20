import React from "react";
import Labels from "./Labels";
class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadInput: "",
      BodyInput: "",
      DueTime: `${new Date().getFullYear()}-${`${
        new Date().getMonth() + 1
      }`.padStart(2, 0)}-${`${new Date().getDate() + 1}`.padStart(
        2,
        0
      )}T${`${new Date().getHours()}`.padStart(
        2,
        0
      )}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
      MyLabels: [],
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    if (this.state.HeadInput !== "" && this.state.BodyInput !== "") {
      this.props.OnFormSubmit(this.state);
      this.setState({
        HeadInput: "",
        BodyInput: "",
        DueTime: `${new Date().getFullYear()}-${`${
          new Date().getMonth() + 1
        }`.padStart(2, 0)}-${`${new Date().getDate() + 1}`.padStart(
          2,
          0
        )}T${`${new Date().getHours()}`.padStart(
          2,
          0
        )}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
      });
    }
  };
  handleChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };

  onLabelChange = (event) => {
    this.setState({
      MyLabels: event,
    });
  };

  render() {
    return (
      <div>
        <form class="form-group" onSubmit={this.onFormSubmit}>
          <label>Head</label>
          <input
            class="form-control"
            type="text"
            value={this.state.HeadInput}
            onChange={(e) => this.setState({ HeadInput: e.target.value })}
          />
          <label>Description</label>
          <input
            class="form-control"
            type="text"
            value={this.state.BodyInput}
            onChange={(e) => this.setState({ BodyInput: e.target.value })}
          />
          <div class="d-flex justify-content-right">
            <button
              type="submit"
              class="btn btn-primary btn-sm"
              style={{ marginTop: "10px" }}
            >
              Add To Do
            </button>
            <input
              type="datetime-local"
              style={{ marginLeft: "40px" }}
              value={this.state.DueTime}
              onChange={(e) => this.handleChange("DueTime", e)}
              style={{ marginTop: "10px", marginLeft: "40px" }}
            />
            <Labels
              onLabelChange={this.onLabelChange}
              AddLabel={this.props.AddLabel}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddBar;
