import React from "react";

const COLORS = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
];

class Lables extends React.Component {
  state = { MyLabels: [], counter: 0, stat: [] };

  addLabel = (name) => {
    this.setState({
      MyLabels: [
        ...this.state.MyLabels,
        <button
          key={this.state.counter}
          class={`btn btn${
            this.state.stat[this.state.counter] === true ? "" : "-outline"
          }-${COLORS[this.state.counter % 7]}`}
          onClick={this.changeStatus}
          value={name}
        >
          {" "}
          {name}
        </button>,
      ],
      counter: this.state.counter + 1,
      stat: [...this.state.stat, false],
    });
  };

  changeStatus = (event) => {
    let place = 0;
    for (let i = 0; i < this.state.MyLabels.length; i++) {
      if (this.state.MyLabels[i].props.value === event.target.value) {
        place = i;
      }
    }
    let newStat = this.state.stat;
    newStat[place] = !this.state.stat[place];
    let newLabels = this.state.MyLabels;
    newLabels[place] = (
      <button
        key={place}
        class={`btn btn${newStat[place] === true ? "" : "-outline"}-${
          COLORS[place % 7]
        }`}
        onClick={this.changeStatus}
        value={event.target.value}
        type="button"
      >
        {" "}
        {event.target.value}
      </button>
    );

    this.setState({
      stat: newStat,
      MyLabels: newLabels,
    });

    this.props.onLabelChange(this.state.MyLabels);
  };
  checkifinit = (LabelName) => {
    for (let i = 0; i < this.state.MyLabels.length; i++) {
      if (this.state.MyLabels[i].props.value === LabelName) {
        return true;
      }
    }
    return false;
  };

  async componentDidUpdate() {
    if (
      this.props.AddLabel !== "" &&
      !this.checkifinit(this.props.AddLabel) &&
      this.state.MyLabels.length < 8
    ) {
      // await console.log(this.props.AddLabel);
      await this.addLabel(this.props.AddLabel);
    }
  }

  async componentDidMount() {
    await this.addLabel("work");
    this.addLabel("important");
    this.addLabel("school");
    this.props.onLabelChange(this.state.MyLabels);
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "20px" }}>
        {this.state.MyLabels}
      </div>
    );
  }
}

export default Lables;
