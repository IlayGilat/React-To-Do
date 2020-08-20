import React from "react";
import ToDoList from "./ToDoList";
import Settings from "./Settings";
class App extends React.Component {
  state = {
    labelname: "",
  };

  OnFormSubmit = async (state) => {
    await this.setState({
      labelname: state.labelname,
    });
    //console.log(this.state.labelname);
  };
  render() {
    return (
      <div>
        <Settings OnFormSubmit={this.OnFormSubmit} />
        <ToDoList AddLabel={this.state.labelname} />
      </div>
    );
  }
}

export default App;
